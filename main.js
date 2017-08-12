let flag=false
$(document).ready(function(){
    'use strict';
    console.log('hello')
    
    paper.install(window)
    paper.setup(document.getElementById('mainCanvas'))
   
    
    let tool = new Tool();
    tool.onMouseDown = function(event){
      flag = true   
    }
    tool.onMouseUp = function(event){
      flag = false   
    }
    tool.onMouseMove = function(event){
      if(flag){
        let c = Shape.Circle(event.point,20)
        c.fillColor = 'green'      
      }
    }
    
    let text = new PointText(200,200,80)
    text.justification = 'center'
    text.fillColor = 'black'
    text.fontSize = 20
    text.content = 'hello,world'
   
    paper.view.draw()
    
})