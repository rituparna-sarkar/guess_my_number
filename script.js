
        function generate_rand(){
            let rand_number= Math.trunc(Math.random()*20)+1;
            console.log(rand_number);
            return rand_number;
        }

        let random_number = generate_rand();
        let score=20;
        let Highscore=0;
        let current_score=20;

         let message =function(msg){
            document.querySelector(".msgs").textContent=msg;
         }

        document.querySelector('#again').addEventListener('click',function(){ 
            document.querySelector("body").style.backgroundColor="black";
            document.getElementById("num").value=null;
            score=20;
            current_score=20;
            random_number = generate_rand();
            document.querySelector('.point').textContent=score;
            document.querySelector(".msgs").innerHTML="Start guessing...."
        })

        document.getElementById("check").addEventListener("click",function(){   
        let number=parseInt(document.getElementById("num").value);
        console.log(number);
        if(!number){
            
            message("no number");
        }

        else if(number==random_number){
            document.querySelector(".msgs").innerHTML ="<h3>you are right .you won! <i class='fa-solid fa-trophy fa-bounce' style='color: #f9c32f;'></i></h3>" ;
            document.querySelector("body").style.backgroundColor="green"
        }
        else if(number>random_number){
            message("number is too high")
            document.querySelector(".msgs").innerHTML='<h3>your number is high <i class="fa-solid fa-chart-line" style="color: #e63d05;"></i> </h3>';
           
        }
        else{
            document.querySelector(".msgs").innerHTML='<h3>Your number is low <i class="fa-solid fa-down-long" style="color: #ef5806;"></i></h3>'
        }
        });

        document.querySelector("#check").addEventListener('click',function(){
            
            let number=parseInt(document.getElementById("num").value);
            console.log('number',number);
            console.log('random_num',random_number);
            if(number!=random_number){
                current_score = current_score-1;
                document.querySelector('.point').textContent=current_score;
            }
            else{
                if(current_score>Highscore){
                    Highscore=current_score;
                    document.querySelector('.high_score').textContent=current_score;
                }
            }
        })

       
        

    