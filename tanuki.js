let mass=[]
let masscollect=[]
let error=[]
let success=[]
let value=0
let value_end=5
let collect=['NISUAZ','MAMSY','CHEDDER','NEW20']

function st_collect(){
	masscollect=[]
	error=[]
	success=[]
	document.getElementById("btc").style.display='none'
	document.getElementById("downc").style.display='inline-block'
	document.getElementById("prc").value=0
	document.getElementById("prc").max=collect.length+1
	for(let i=0;i<collect.length;i++){
		let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
		let xhr = new XHR();
		xhr.open('POST', 'https://cors-anywhere.herokuapp.com/https://www.tanuki.ru/api/', false); 
		xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
		xhr.setRequestHeader('Accept-Language', 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			let obj = xhr.response
			success.push('1')
			console.log('promo: '+collect[i])
			document.getElementById("prc").value++
			let objJSON = eval("(function(){return " + obj + ";})()");
			let message = String(objJSON.ResponseBody.promoActions[0].message);
			if(message!='Данный код не активен или не соблюдены все условия акции'){
				if (/Промокод .* успешно применен/g.test(message)==true){
					message='Скидка 15%'
				}
				message=message.replace(/Добавлен п/g, "П")
				masscollect.push({
					"code" : collect[i],
					"message"  : message
				});
			}
		}
		xhr.onerror = function() { error.push('1') } 
		xhr.send('{"header":{"version":"2.0","userId":"zxc32-3dw23-fe33f-ve322-ffeef3","debugMode":true,"agent":{"device":"desktop","version":"Peris 98.5.777.54"},"authToken":"","authSign":"","langId":"1","cityId":"1","dbgValue":""},"method":{"name":"changeBasket"},"data":{"deliveryType":"deliveryTypeRegular","paymentMethod":"payment_encash","code":"'+collect[i]+'","orderItems":[{"itemId":"15319","rubricatorId":22,"amount":1,"price":495,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"15319"},{"itemId":"91","rubricatorId":15,"amount":2,"price":395,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"91"},{"itemId":"87","rubricatorId":15,"amount":1,"price":380,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"87"},{"itemId":"86","rubricatorId":15,"amount":1,"price":365,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"86"},{"itemId":"96","rubricatorId":15,"amount":2,"price":415,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"96"}]}}')
	}
	document.getElementById("btc").style.display='inline-block'
	document.getElementById("downc").style.display='none'
	alert('Успешно: '+success.length+' --  Ошибки: '+error.length)
	document.getElementById("textc").innerHTML=JsonToCSV(masscollect)
	
}





function st_search(){
		let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
	let xhr = new XHR();
	xhr.open('POST', 'https://cors-anywhere.herokuapp.com/https://www.tanuki.ru/api/', true); 
	xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
	xhr.setRequestHeader('Accept-Language', 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		let obj = xhr.response
		success.push('1')
		console.log('promo: VK'+value)
		document.getElementById("pr").value++
		let objJSON = eval("(function(){return " + obj + ";})()");
		let message = String(objJSON.ResponseBody.promoActions[0].message);
		if(message!='Данный код не активен или не соблюдены все условия акции'){
			if (/Промокод .* успешно применен/g.test(message)==true){
				message='Скидка 15%'
			}
			message=message.replace(/Добавлен п/g, "П")
			mass.push({
				"code" : 'VK'+value,
				"message"  : message
			});
		}
		if(value==value_end){
			search_stop()
		}else{
			value++
			st_search(value)
		}
	}
	xhr.onerror = function() { error.push('1') } 
	xhr.send('{"header":{"version":"2.0","userId":"zxc32-3dw23-fe33f-ve322-ffeef3","debugMode":true,"agent":{"device":"desktop","version":"Peris 98.5.777.54"},"authToken":"","authSign":"","langId":"1","cityId":"1","dbgValue":""},"method":{"name":"changeBasket"},"data":{"deliveryType":"deliveryTypeRegular","paymentMethod":"payment_encash","code":"VK'+value+'","orderItems":[{"itemId":"15319","rubricatorId":22,"amount":1,"price":495,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"15319"},{"itemId":"91","rubricatorId":15,"amount":2,"price":395,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"91"},{"itemId":"87","rubricatorId":15,"amount":1,"price":380,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"87"},{"itemId":"86","rubricatorId":15,"amount":1,"price":365,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"86"},{"itemId":"96","rubricatorId":15,"amount":2,"price":415,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"96"}]}}')
}
function search(val){
	let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
	let xhr = new XHR();
	xhr.open('POST', 'https://cors-anywhere.herokuapp.com/https://www.tanuki.ru/api/', true); 
	xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
	xhr.setRequestHeader('Accept-Language', 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		let obj = xhr.response
		let objJSON = eval("(function(){return " + obj + ";})()");
		let message = String(objJSON.ResponseBody.promoActions[0].message);
		if (/Промокод .* успешно применен/g.test(message)==true){
				message='Скидка 15%'
			}
		message=message.replace(/Добавлен п/g, "П")
		alert(message)
	}
	xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ); } 
	xhr.send('{"header":{"version":"2.0","userId":"zxc32-3dw23-fe33f-ve322-ffeef3","debugMode":true,"agent":{"device":"desktop","version":"Peris 98.5.777.54"},"authToken":"","authSign":"","langId":"1","cityId":"1","dbgValue":""},"method":{"name":"changeBasket"},"data":{"deliveryType":"deliveryTypeRegular","paymentMethod":"payment_encash","code":"'+val+'","orderItems":[{"itemId":"15319","rubricatorId":22,"amount":1,"price":495,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"15319"},{"itemId":"91","rubricatorId":15,"amount":2,"price":395,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"91"},{"itemId":"87","rubricatorId":15,"amount":1,"price":380,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"87"},{"itemId":"86","rubricatorId":15,"amount":1,"price":365,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"86"},{"itemId":"96","rubricatorId":15,"amount":2,"price":415,"isPaidDelivery":false,"gift":false,"code":null,"isRelated":false,"id":"96"}]}}')
}
function search_mask(from,to){
	if (from.replace(/\s/g, '').length === 0 || isNaN(from) || to.replace(/\s/g, '').length === 0 || isNaN(to)) {
		alert('Введите диапазон!');
	} else { 
		document.getElementById("bt").style.display='none'
		document.getElementById("down").style.display='inline-block'
		value=from
		value_end=to
		document.getElementById("pr").value=0
		document.getElementById("pr").max=value_end-value+1
		mass=[]
		success=[]
		error=[]
		st_search()
	}
}
JsonFields = ["Промокод", "Подарок"]
function JsonToCSV(val) {
    var csvStr = JsonFields.join(",") + "\n";

    val.forEach(element => {
        code = element.code;
        message = element.message;
        csvStr += code + ',' + message + "\n";
    })
    return csvStr;
}
function search_stop(){
	value=value_end
	alert('Успешно: '+success.length+' --  Ошибки: '+error.length)
	document.getElementById("text").innerHTML=JsonToCSV(mass)
	document.getElementById("bt").style.display='inline-block'
	document.getElementById("down").style.display='none'
}