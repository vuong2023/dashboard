import { A } from '@solidjs/router'
import { endpoint } from '~/signals'

export const LogoText = () => (
  <div class="text-md flex items-center gap-1 whitespace-nowrap font-bold uppercase sm:text-xl">
    <A
      class="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
      href={endpoint() ? '/' : '/setup'}
    >
      Vương2023
    </A>
    <span>(</span>
    <a
      class="text-primary transition-transform hover:rotate-90 hover:scale-125"
      href="https://m.facebook.com/onghoangbay07"
      target="_blank"
    >
      ohb
    </a>
    <span>)</span>
  </div>
)
