(function(){

	// m163 outchain player.
	var ifr = '<iframe id="m163" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=465675149&auto=1&height=66"></iframe>';

	var m163 = document.createElement('div');
	m163.id = "m163";

	// start building.
	m163.innerHTML = ifr;		

	document.body.appendChild(m163);
	
})();
