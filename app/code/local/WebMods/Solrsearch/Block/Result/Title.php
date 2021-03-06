<?php
class WebMods_Solrsearch_Block_Result_Title extends Mage_Core_Block_Template
{
	protected function _construct()
	{
		$this->setTemplate('solrsearch/result/title.phtml');
	}
	
	public function getSolrData(){
		return $this->getParentBlock()->getData('solrdata');
	}
	
	/**
	 * Retrieve current category model object
	 *
	 * @return Mage_Catalog_Model_Category
	 */
	public function getCurrentCategory()
	{
		if (!$this->hasData('current_category')) {
			$this->setData('current_category', Mage::registry('current_category'));
		}
		return $this->getData('current_category');
	}
	
	public function getCmsBlockHtml()
	{
		if (!$this->getData('cms_block_html')) {
			$html = $this->getLayout()->createBlock('cms/block')
			->setBlockId($this->getCurrentCategory()->getLandingPage())
			->toHtml();
			$this->setData('cms_block_html', $html);
		}
		return $this->getData('cms_block_html');
	}
	
	/**
	 * Check if category display mode is "Products Only"
	 * @return bool
	 */
	public function isProductMode()
	{
		return $this->getCurrentCategory()->getDisplayMode()==Mage_Catalog_Model_Category::DM_PRODUCT;
	}
	
	/**
	 * Check if category display mode is "Static Block and Products"
	 * @return bool
	 */
	public function isMixedMode()
	{
		return $this->getCurrentCategory()->getDisplayMode()==Mage_Catalog_Model_Category::DM_MIXED;
	}
	
	/**
	 * Check if category display mode is "Static Block Only"
	 * For anchor category with applied filter Static Block Only mode not allowed
	 *
	 * @return bool
	 */
	public function isContentMode()
	{
		$category = $this->getCurrentCategory();
		$res = false;
		if ($category->getDisplayMode()==Mage_Catalog_Model_Category::DM_PAGE) {
			$res = true;
			if ($category->getIsAnchor()) {
				$state = Mage::getSingleton('catalog/layer')->getState();
				if ($state && $state->getFilters()) {
					$res = false;
				}
			}
		}
		return $res;
	}
}
