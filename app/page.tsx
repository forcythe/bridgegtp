import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'
import ContactForm from '@/components/ContactForm'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Bridge Talent Partners — Hire Proven Talent in Africa',
  description: 'Executive search and graduate trainee programs for companies serious about Africa and emerging markets.',
}

export default function Home() {
  return <HomeClient />
}
