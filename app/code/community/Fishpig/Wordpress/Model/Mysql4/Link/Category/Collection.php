<?php
/**
 * @category    Fishpig
 * @package     Fishpig_Wordpress
 * @license     http://fishpig.co.uk/license.txt
 * @author      Ben Tideswell <help@fishpig.co.uk>
 */

class Fishpig_Wordpress_Model_Mysql4_Link_Category_Collection extends Fishpig_Wordpress_Model_Mysql4_Term_Collection_Abstract
{
	protected $_categoryType = 'link_category';
	
	public function _construct()
	{
		$this->_init('wordpress/link_category');
	}

	/**
	 * Perform the joins necessary to create a full category record
	 */
	protected function _initSelect()
	{
		parent::_initSelect();
		
		$this->getSelect()->where('taxonomy.taxonomy=?', 'link_category');
		
		return $this->getSelect();
	}
}
