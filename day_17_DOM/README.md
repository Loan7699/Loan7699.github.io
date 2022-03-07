# DOM
## 1. Gioi thieu DOM
+ Document Object Model
+ gom: element, atribute, text
+ cac thao tac voi DOM: truy cap vao element; lay, chinh sua noi dung cua element; thay doi thuoc tinh; them, xoa, thay the, sao chep element DOM; thao tac class CSS

## 2. Truy cap vao element cua DOM
co 5 phuong thuc thuong dung sau
### 2.1. thong qua ID
tra ve 1 phan tu
```document.geteElementByid('');```
VD: 
```js
const heading = document.getElementById('heading');
```
### 2.2. Thong qua TagName
+ tra ve danh sach phan tu
+ lấy qua chỉ số, su dung duoc for, length...
+ ko áp dụng được các array methods như map,reduce...muon su dung can convert sang array
  ```Array.from(paraTagNames).map(p => console.log(p));```
+ Syntax:
  ```document.getElementsByTagName('TagName')```
+ VD:
  ```js
  const paraTagNames = document.getElementsByTagName('p');
  ```

### 2.3. Thong qua ten Class
+ tra ve danh sach
+ Syntax:
  ```document.getElementsByClassName('className')```
+ VD:
  ```const paraClassName = document.getElementsByClassName('para')```

### 2.4. Thong qua CSS Selector
+ tra ve phan tu dau tien tim thay
+ không tìm thấy trả về Null
+ Syntax:
  ```document.querySelector('CSS Selector');```
+ VD:
  ```const ul1 = document.querySelector('.box ul');```

### 2.5. thong qua CSS Selector
+ tra ve danh sach cac phan tu
+ Syntax:
  ```document.querySelectorAll('CSS Selector')```
+ VD:
  ```const paraSelectorAll = document.querySelectorAll('p');```

***Note***: cac phuong thuc tren la truy cap toan cuc qua document, ngoai ra con co the truy cap cuc bo (gian tiep) thong qua cac phan tu khac co quan he voi phan tu can truy cap nhu: paarentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling

## 3. Lay, chinh sua noi dung phan tu, thay doi thuoc tinh phan tu
### 3.1. Lay noi dung element
co 3 cach:
+ ```Node.innerHTML``` : lấy ra tên thẻ và nội dung của thẻ
  VD:
  ```js
  const ul1 = document.querySelector('.box ul'); // truy cap phan tu
  console.log(ul1.innerHTML) // lay ra noi dung
  ```
+ ```Node.innerText```: in ra nội dung, ko lấy ra được nội dung thẻ ẩn
  VD: ```console.log(ul1.innerText);```
+ ```Node.textContent```: in ra nội dung và giữ nguyên định dạng, lấy ra được nội dung thẻ ẩn
  VD: ```console.log(ul1.innerContent);```

### 3.2. Chinh sua noi dung Element
co 3 cach tuong tu nhu lay noi dung
+ ```heading.innerHTML = "Xin chào"``` // nếu insert text thông thường có 3 cách nhưng nếu nội dung chứa thẻ html thì chỉ được dùng innerHTML
+ ```heading.innerText = "Các bạn"```
+ ```heading.innerContent = "<span>Hello</span>";```

### 3.3. Thay doi thuoc tinh phan tu
```heading.style.color = 'red'```
```heading.style.backgroundColor = 'black'``
```heading.style.fontSize = '50px'```
// những thuộc tính thay đổi sẽ thành inline_style

## 4. Them, xoa, thay the, sao chep element DOM
### 4.1. Tao 1 element
+ Syntax:
  ```document.createElement```
+ VD:
  ```js
    // tạo thẻ a
    const link = document.createElement('a');
    // chèn nội dung
    link.innerText = 'google';
    // chèn link
    link.href = 'https://www.google.com/';
    // link sang 1 tab mới
    link.target = '_blank';
    console.log(link);
    ```
### 4.2. Xoa element
+ Syntax: 
```removeChild()```
+ VD:
  ```js
  // truy cap vao phan tu can xoa va phan tu cha cua no
  const para1 = document.querySelector('p');
  document.body.removeChild(para1)
  ```
### 4.3. Them phan tu
+ prepend: 
  thêm vào đầu phần tử cha (cần xác định được phần tử cha)
  ```document.body.prepend(para4)``` // thêm para4 vào trên phần body

+ appendChild()
  thêm cuối cùng body
```document.body.appendChild(para4);```
+ insertBefore():
  thêm vào một vị trí bất kì, cần biết cha(body) và vị trí đó nằm trước cái nào(box)
  ```js
    // chèn thẻ li có nội dung là "Thẻ li new" vào giữa li 33 và 44
    // b1: tạo thẻ li có nội dung trên
    const liNew = document.createElement('li');
    // b2: chèn nội dung cho thẻ
    liNew.innerText = 'Thẻ li new';
    // b3: insert vào DOM, cần truy cập vào ul là cha và li 44
    const ul = document.querySelector('.box ul');
    const li44 = document.querySelector('ul li:last-child');
    ul.insertBefore(liNew, li44);
    ```
+ insertAdjacentHTML(position, text)
+ insertAdjacentElement(position, element)
+ insertAdjacentText(position, text)
position: Vị trí của phần tử cần thêm, bao gồm 4 vị trí sau: beforebegin, afterbegin, beforeend, afterend
VD: 
```js
// truy cập ul
 const ul2 = document.querySelector('body > ul');
 ul2.insertAdjacentHTML('beforebegin', "<button>Đăng nhập</button>")
// insertAdjacentElement
const button = document.createElement('button');
button.innerText = 'Đăng ký';
heading.insertAdjacentElement('afterend', button);
```
### 4.4. Thay the 1 Element
+ xác định phần tử thay thế và được thay thế
+ VD: 
  ```js
    // thay thế thẻ para2 bằng thẻ a link đến trang facebook.com
    // tạo thẻ a
    const linkFb = document.createElement('a');
    linkFb.innerText = 'facebook';
    linkFb.href = 'htttps://facebookcom.com';
    // truy cập vào thẻ muốn thay thế và cha của nó
    const para2 = document.querySelector('.para');
    document.body.replaceChild(linkFb, para2);
    ```
### 4.5. Sao chep 1 Element
+ co 2 cach:
```node.cloneNode(deep)```
    node: Phần tử được clone (cần được truy cập trước)
    deep: Không bắt buộc gom true va false
    true : sao chép node, attributes và thành phần con của nó
    false: chỉ sao chép Node và attributes (mặc định)
+ VD:
 ```js
    const boxCopy = box.cloneNode(true) // copy thẻ và nội dung bên trong thẻ
    const boxCopy1 = box.cloneNode(false) // chỉ cop tên thẻ
```

## 5. CSS Selector thuong dung:
**.class**
+ VD:.intro: phan tu co class = 'intro'

**.class1.class2**
+ VD:.name1.name2: chon phan tu co class = 'name1' va 'name2'

**.class1 .class2**
+ VD:.name1 .name2: chon tat ca cac phan tu co class = 'name2' la con cua phan tu co class = 'name1'

**#id**
+ VD:#firstname: phan tu id = 'firstname'

**\***: chon tat ca cac phan tu

**element**
+ VD:p: chon tat ca cac phan tu p

**element.class**
+ VD:p.intro: chon tat ca phan tu p voi class = 'intro'

**element,element**
+ VD:div, p: chon tat ca phan tu div va phan tu p

**element>element**
+ VD:div > p: chon tat ca phan tu p co phan tu div la cha

**element+element**
+ VD:div + p: chon phan tu p dau tien ngay sau phan tu div

**element1~element2**
+ VD:p ~ ul: chon tat ca phan tu ul dung truoc phan tu p

**:first-child**
+ VD: p:first-child: chon moi phan tu p la phan tu con dau tien cua phan tu cha

**::first-letter**
+ VD:p::first-letter: chon chu cai dau tien cua moi phan tu p
  
**::first-line**
+ VD:p::first-line: chon dong dau tien cua moi phan tu p

**:last-child**
+ VD:p:last-child: chon moi phan tu p la phan tu con cuoi cung cua phan tu goc cua no

**:nth-child(n)**
+ VD:p:nth-child(2): chon moi phan tu p la phan tu con thu hai cua phan tu cha cua no

**:only-child**
+ VD: chon moi phan tu p la phan tu con duy nhat cua phan tu cha cua no


