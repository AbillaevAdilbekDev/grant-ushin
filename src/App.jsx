/* 
  * menin' proyektimnin' maqseti bootstrap css frameworkin reactjs da qolayli qilip paydalaniwdi an'satlastiriw
  * reactjs da jazilg'an proyektlerdi optimizatsiya qiliw
  * Ozimiz ushin qolayli tilde atalg'an komponentler
  * verstkani tezirek qiliwg'a jardemlesiw
  * Matematik algoritimlerdi qolayli qiliw
  ----------------------------------------
  * menin' proyektim dasturshiler ushin qolayliq jaratiw maqsetinde qilindi
*/
/* 
  * mening proyektimning maqsadi bootstrap css frameworkin reactjs da qulay qilip foydalanishni osonlashtirish
  * reactjs da yozilga proyektlarni optimizatsiya qilish
  * ozimiz uchun qulay tilda nomlangan komponentlar
  * verstkani teziroq qilishga yordamlashish
  * Matematik algoritimlarni qulay qilish
  ----------------------------------------
  * mening proyektim dasturchilar uchun qulaylik yaratish maqsatida qilindi



  author:Abillaev Adilbek
*/
import { Container } from "../library/english/adilbek";
import { LinkButton } from "../library/english/adilbek";
import {H1,H2,H3,H4,H5,H6,Button} from '../library/english/adilbek'
import { useState } from "react";
export default function App(){
  const [count,setCount]= useState(0)
  return(
    <main>
      <Container>
        <h1>
          Hello,World
        </h1>
      </Container>
      <LinkButton href="/" color="primary">
        click
      </LinkButton>
      <H1 color='danger' fontSize='1' textCenter={true}>
        Hello,World!
      </H1>
      <H2 color={'success'} textCenter={true}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint possimus neque a tenetur earum nihil tempore suscipit mollitia assumenda. Aliquid ipsam minima quibusdam fuga sit repudiandae provident iste cupiditate.
      </H2>
      <H3 color={'info'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fugit omnis tenetur sequi ratione, ullam odio error modi similique maxime sapiente at. Adipisci optio similique perspiciatis iste in vitae dicta?
      </H3>
      <H4 color={'warning'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi, maiores doloremque asperiores eos dolorem repellat ab veniam! Quo, eos nesciunt deleniti laudantium facilis maxime? Natus nostrum et dolorem maxime?
      </H4>
      <H5 color={'secondary'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla, dolor aperiam ad corrupti quod tenetur nam earum a sit possimus cupiditate cum soluta exercitationem vel eligendi voluptatibus. Beatae, aliquam?
      </H5>
      <H6 color={'dark'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vero iure vitae accusantium reiciendis! Neque iste explicabo voluptatibus reprehenderit nisi consequatur tenetur delectus nemo sequi, aut architecto, iusto asperiores laborum.
      </H6>
      <Button color={'danger'} onClick={()=>setCount(count+1)}>
        Count:{count}
      </Button>
    </main>
  )
}