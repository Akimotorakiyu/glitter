import { defineView } from '@shrio/shrio'
import {
  ButtonViewLight,
  ButtonViewBlue,
  ButtonViewOrange,
  ButtonViewRed,
  ButtonViewGray,
} from '../../components/index'

import {
  TextViewRed,
  TextViewBlack,
  TextViewBlue,
  TextViewOrange,
  TextViewGray,
  ParagraphView,
  TextViewGreen,
} from '../../components/text'

import { ImageView } from '../../components'

export const ShopWindowView = defineView(() => {
  return (
    <div>
      <h2 class=" text-center text-xl ">Button</h2>
      <div class="flex justify-center max-w-5xl  p-8 m-auto">
        <ButtonViewLight class=" m-4">Button</ButtonViewLight>
        <ButtonViewBlue class=" m-4">Button</ButtonViewBlue>
        <ButtonViewOrange class=" m-4">Button</ButtonViewOrange>
        <ButtonViewRed class=" m-4">Button</ButtonViewRed>
        <ButtonViewGray class=" m-4">Button</ButtonViewGray>
      </div>
      <h2 class=" text-center text-xl ">Text</h2>
      <div class=" max-w-5xl p-8 m-auto">
        <ParagraphView class="justify-center">
          <ImageView
            src="/laugh.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
          <TextViewBlack>
            A modern vanilla front-end framework, for building UI on the web.
          </TextViewBlack>
          <ImageView
            src="/star.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
        </ParagraphView>
        <ParagraphView class="justify-center">
          <ImageView
            src="/laugh.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />

          <TextViewGray>
            A modern vanilla front-end framework, for building UI on the web.
          </TextViewGray>
          <ImageView
            src="/star.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
        </ParagraphView>
        <ParagraphView class="justify-center">
          <ImageView
            src="/laugh.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />

          <TextViewBlue>
            A modern vanilla front-end framework, for building UI on the web.
          </TextViewBlue>
          <ImageView
            src="/star.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
        </ParagraphView>
        <ParagraphView class="justify-center">
          <ImageView
            src="/laugh.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />

          <TextViewOrange>
            A modern vanilla front-end framework, for building UI on the web.
          </TextViewOrange>
          <ImageView
            src="/star.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
        </ParagraphView>
        <ParagraphView class="justify-center">
          <ImageView
            src="/laugh.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />

          <TextViewGreen>
            A modern vanilla front-end framework, for building UI on the web.
          </TextViewGreen>
          <ImageView
            src="/star.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
        </ParagraphView>
        <ParagraphView class="justify-center">
          <ImageView
            src="/laugh.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />

          <TextViewRed>
            A modern vanilla front-end framework, for building UI on the web.{' '}
          </TextViewRed>
          <ImageView
            src="/star.svg"
            alt="netlify"
            class=" inline-block  w-4 h-4"
          />
        </ParagraphView>
      </div>
    </div>
  )
})
