function clearText(field)
{
	if (field.defaultValue == field.value) {
	
		field.value = '';
		field.style.color = '#000000';
		
	} else if (field.value == '') {
	
		field.value = field.defaultValue;
		field.style.color = '#999999';
	}
}