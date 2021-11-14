// Changing body propeties     //
let boD = document.body;
boD.style.margin = "0";
boD.style.padding = "20px";
boD.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
boD.style.backgroundColor="#d7c5a4";

// Creating the container div      //
boD.prepend(document.createElement("div"));
let container = boD.firstElementChild;
container.style.display = "flex";
container.style.position = "relative";
container.style.backgroundColor = "#fff";
container.style.margin = "auto";
container.style.width = "1400px";
container.style.height = "800px";

// Creating the Flex-container div tables   //
container.prepend(document.createElement("div"));
let flexCont = container.firstElementChild;
flexCont.style.backgroundColor = "transparent";
flexCont.style.margin = "auto";
flexCont.style.display = "flex";
flexCont.style.flexWrap = "wrap";
flexCont.style.justifyContent = "center";
flexCont.style.gap = "30px";
flexCont.style.zIndex = "10";

// Append Tables    //
for( let i = 0 ; i < 4 ; i++ )
flexCont.append(document.createElement("div"));

// Creating Table Function  //
function addTable (elem,TableColor,headerInner){
    elem.style.width = "250px";
    elem.style.height = "600px";
    elem.style.border = " 1px solid black";
    elem.style.backgroundColor = "#fff";
    elem.style.boxShadow = "4px 4px 1.5px" + TableColor + ", 4px 4px 0px 1px black";
    elem.append(document.createElement('div'));
    let divHeader = elem.firstElementChild;
    divHeader.style.height = "20px";
    divHeader.style.padding = "10px";
    divHeader.style.backgroundColor = TableColor;
    divHeader.style.textAlign = "center";
    divHeader.innerHTML = headerInner;
}

// Creating Problem table   //
let probDiv = flexCont.firstElementChild;
probDiv.style.display = "flex";
probDiv.style.flexDirection = "column";
probDiv.style.gap="55px";
probDiv.append(document.createElement("div"));
probDiv.append(document.createElement("div"));
let defProb =  probDiv.firstElementChild;
let reverseProb = probDiv.lastElementChild;

addTable(defProb,'#01edeb','Define the problem');
addTable(reverseProb,'#bb8cff','Reverse the problem');
defProb.style.height = reverseProb.style.height =  "270px";

// Crating Other Tables     //
let collectIdeas = probDiv.nextElementSibling;
let reverseIdea = collectIdeas.nextElementSibling;
let idSolution = reverseIdea.nextElementSibling;

addTable(collectIdeas,'#ffa461','Collect ideas');
addTable(reverseIdea,'#f2f742','Reverse the ideas');
addTable(idSolution,'#b0f46c','Identify solutions');



// Creating details in the container    //
function creatDetail(imgSrc,imgWidth,imgHeight,IsCover,imgBorderRadius,divLeft,divTop,divTransform) {
    container.append(document.createElement('div'));
    let detailDiv = container.lastElementChild;
    detailDiv.append(document.createElement('img'));
    detailDiv.lastElementChild.src = imgSrc;
    detailDiv.lastElementChild.style.width = imgWidth;
    detailDiv.lastElementChild.style.height = imgHeight; 
    detailDiv.lastElementChild.style.objectFit = (IsCover)? "cover":"fill";
    detailDiv.lastElementChild.style.borderRadius = imgBorderRadius;
    detailDiv.style.position = "absolute";
    detailDiv.style.left = divLeft;
    detailDiv.style.top = divTop;
    detailDiv.style.transform = "rotate(" + divTransform +")";
}

creatDetail("./Untitled2.png","85px","16px",false,"0px","780px","730px","0deg");
creatDetail("./Untitled2.png","85px","16px",false,"0px","1215px","50px","0deg");
creatDetail("./Untitled2.png","55px","16px",true,"0px","80px","390px","180deg");
creatDetail("./Untitled2.png","54px","16px",true,"0px","480px","40px","270deg");
creatDetail("./Untitled.png","55px","25px",false,"0px","700px","87px","0deg");
creatDetail("./Untitled.png","55px","25px",false,"0px","372px","690px","0deg");

function createCircleDetail (imgUrl,mainDivLeft,mainDivTop,bgDivLeft,bgDivTop,bgDivBgColor) {
    container.append(document.createElement('div'));
    container.append(document.createElement('div'));
    let bgDiv = container.lastElementChild;
    let MainDiv = bgDiv.previousElementSibling;
    MainDiv.style.position = bgDiv.style.position = "absolute";
    MainDiv.style.zIndex = "1";
    MainDiv.style.width = MainDiv.style.height = bgDiv.style.width = bgDiv.style.height = MainDiv.style.backgroundSize = "85px";
    MainDiv.style.borderRadius = bgDiv.style.borderRadius = "50%";
    MainDiv.style.transform = "rotate(315deg)";
    MainDiv.style.backgroundImage = "url('" + imgUrl + "')";
    MainDiv.style.left = mainDivLeft;
    MainDiv.style.top = mainDivTop;
    bgDiv.style.left = bgDivLeft;
    bgDiv.style.top = bgDivTop;
    bgDiv.style.backgroundColor = bgDivBgColor;
}

createCircleDetail('./line-transparent.png','120px','55px','100px','65px','#b0f46caa');
createCircleDetail('./line-transparent.png','1215px','658px','1235px','650px','#ffa461aa');