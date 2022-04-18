// 创建一个新的 div 元素
 let newDiv = document.createElement("div");
 // 给它一些内容
 let newContent = document.createTextNode("Hi there and greetings!");
 // 添加文本节点 到这个新的 div 元素
 newDiv.appendChild(newContent);
// 插入我们刚创建的div元素
 document.body.appendChild(newDiv)