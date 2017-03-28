(function(){
	
	//function(){
		var ifr = '<iframe id="m163" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=465675149&auto=1&height=66"></iframe>';
		var m163 = document.createElement('div');
		m163.id="m163";
		m163.innerHTML = ifr;		
		m163.style.position = "fixed";
		m163.style.right = 0;
		m163.style.bottom = 0;
		m163.style.zIndex = 13163;
		
		document.body.appendChild(m163);		
	// }
})();
