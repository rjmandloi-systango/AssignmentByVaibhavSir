function interchange()
{
  let div1=document.getElementById("div1");
  let div2=document.getElementById("div2");

  let tempText = div1.innerText;
  div1.innerText = div2.innerText;
  div2.innerText = tempText;

  let tempColor = window.getComputedStyle(div1).backgroundColor;
  div1.style.backgroundColor = window.getComputedStyle(div2).backgroundColor;
  div2.style.backgroundColor = tempColor;

}