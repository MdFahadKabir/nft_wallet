import React from 'react'
import Link from 'next/link'
import { Zap, Boxes } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import Image from 'next/image'

import { Facebook, Twitter, Youtube } from 'lucide-react'
import Container from './container'

const Footer = () => {
  return (
  <Container>
      <footer className="w-full border-t bg-background grid items-center gap-12 pb-8 pt-6 md:py-6 mt-20 ">
      <section
        id="footer-header"
        aria-labelledby="footer-header-heading"
        className="flex flex-col space-x-4 border-b pb-8 border-muted "
      >
        <div className="">
          <p className='text-[28px] font-medium'>Join the community</p>
          <div className='flex gap-7 mt-4'>
            <Facebook size={19} />
            <Twitter size={19} />
            <Youtube size={19} />
            <Facebook size={19} />
            <Twitter size={19} />
            <Youtube size={19} />
          </div>
        </div>
      </section>
      <section
        id="footer-content"
        aria-labelledby="footer-content-heading"
        className="flex flex-col gap-10 lg:flex-row lg:gap-96"
      >
        <section
          id="footer-branding"
          aria-labelledby="footer-branding-heading"
        >
          <Link
            aria-label="Home"
            href="/"
            className="flex items-center space-x-2 mt-4"
          >
            <Image
              src='/images/logo.png'
              height={77}
              width={200}
            />
          </Link>
        </section>

        <section
          id="footer-links"
          aria-labelledby="footer-links-heading"
          className="grid flex-1 grid-cols-2 gap-48 xs:grid-cols-2 sm:grid-cols-4"
        >

          <div className="space-y-3">
            <h4 className="text-base font-medium">Help</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">About</li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Contact</li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Team</li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Support</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-medium">Policies</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Career</li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Health</li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Privacy</li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Learn more</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-medium">Social</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                <Link
                  href="https://www.linkedin.com/in/asmraihan/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold transition-colors hover:text-foreground"
                >
                  Linkedin
                </Link>
              </li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                <Link
                  href="https://github.com/asmraihan"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold transition-colors hover:text-foreground"
                >
                  Github
                </Link>
              </li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                <Link
                  href="https://discord.com/users/asmraihan"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold transition-colors hover:text-foreground"
                >
                  Discord
                </Link>
              </li>
              <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                <Link
                  href="https://www.facebook.com/asmraihanbh/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold transition-colors hover:text-foreground"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </section>



      </section>
      <section
        id="footer-bottom"
        aria-labelledby="footer-bottom-heading"
        className="flex items-center justify-center "
      >
        <div className="">
          <span className='text-[#179DFF]'>Copyright © 2024</span>
        </div>
      </section>
    </footer>
  </Container>
  )
}

export default Footer