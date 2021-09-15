function InsertionSort (a) {
	for(var j = 1; j < a.length; j++) {
		var key = a[j];
		var i = j-1;
		while(i >= 0 && a[i] > key) {
			a[i+1] = a[i];
			i = i-1;
		}
		a[i+1] = key;
	}
	return a;
}


