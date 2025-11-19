"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <div className="size-8 text-primary dark:text-accent">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_543)">
                    <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor" />
                    <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_543">
                      <rect fill="white" height="48" width="48" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-text-light dark:text-text-dark">Bindu Designs</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="/">Home</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="#">About</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="#services">Services</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="/site-photos">Site Photos</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="hidden lg:flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-6 bg-[#25D366] text-white text-sm font-bold shadow-sm hover:brightness-110 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="truncate">For Enquiry</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative w-full min-h-screen overflow-hidden group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuConEkhyp4MxDY2otN9jEJxRkehZ-QT9guMzhQ3rS6srm8rj0frjwr4QlLrZvoghrZs00x8zTeVqacAMvVGVp9WM_t7ob80yyoliCkLykHJcKi8n0Xd3Up71o7p81npVZyKUMTRjr4S1SZgrk6CDRZTxS2WjkmXAMLuI8Pvq913XnI4Im4WavQ1aAF1In4K2Iw7T22KJso4r_4x4L6Dbzo6RCxpZ6_intjz1-3a69DgP7HEu2ytlOHm9f8a8FRXdRaZYUJg3ZOQOJJV')" }} />
          <div className="absolute inset-0 bg-background-dark/80" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-16 sm:px-12 md:px-16 lg:px-24 pt-32">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start gap-8 text-left">
              <div className="flex flex-col gap-4">
                <h1 className="font-(family-name:--font-playfair) text-off-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-lg">
                  Transforming Spaces with Elegance
                </h1>
                <h2 className="text-light-grey text-lg font-normal leading-normal max-w-md">
                  Elegant Interior Design Solutions for Modern Homes.
                </h2>
              </div>
              
              {/* Stats Section */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                <div className="flex flex-col gap-1">
                  <p className="text-primary text-3xl font-bold leading-tight">10+</p>
                  <p className="text-light-grey text-sm font-medium leading-normal">Years Experience</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-primary text-3xl font-bold leading-tight">120+</p>
                  <p className="text-light-grey text-sm font-medium leading-normal">Completed Projects</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-primary text-3xl font-bold leading-tight">100+</p>
                  <p className="text-light-grey text-sm font-medium leading-normal">Happy Clients</p>
                </div>
              </div>
              
              {/* Buttons Section */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a href="#" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-[#25D366] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:brightness-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="truncate">For Enquiry</span>
                </a>
              </div>
            </div>
            
            {/* Right Column: Image Cards */}
            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              <div className="absolute w-[60%] h-[70%] top-0 right-0 transform rotate-6 transition-transform group-hover:rotate-3">
                <div className="w-full h-full bg-cover bg-center rounded-xl shadow-2xl shadow-black/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1Jiiz6tcqyalq-dk5qfyOW2TxYvkDvIiECzlWqqHL7ZAmdwfJX0pArizIPbx_D8I9rlNWJoAeyiaicX9e2l3KayUeJFZU8G5TbaaLtiTVgS8XhOafYSKuhvyMx_zgGAlmoDrL_LmxN6uUT90wkzOUb7oQexhagYU-A_gOfXwNbAu2RETmIWbrUTqA-uBOlFfoCGqpmGL8xcnx3uDHQYPfURK0bea9dxKcePxbAf2SfmV0VSjQB5HuCZtr0Igl5FNPHrwdIsAMp9Ld')" }} />
              </div>
              <div className="absolute w-[70%] h-[80%] bottom-0 left-0 transform -rotate-3 transition-transform group-hover:-rotate-1">
                <div className="w-full h-full bg-cover bg-center rounded-xl shadow-2xl shadow-black/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALChZMIq1bhFRavsYsMKJLWmSmZfskDG0O5R0NZkZS-fNGJZI0uGgQAtEO3HqTf0l5KGteSR_TMC9-y5iljXdn4jkcr4K4cCefispYloD6exTHGxWqfRqh72A1cZ1bQ8Wsg7dZFQTKbSApZvTwNjy-aGOjXSW4KW_aqIRNp3D3BJhJfVFrHSDHv0VaDBYgtUdL1BZhf7ABAAARb45T-7nneajFgJLuVPpQ3UdFASWGMwXE_x4yLa6kdPTQV6JCeBOTsTrJvRltfFDy')" }} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-5xl">Our Services</h2>
            <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">Crafting unique environments that reflect your personality and style.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4 rounded border border-neutral/50 bg-white/30 dark:bg-primary/20 dark:border-neutral/20 p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <span className="material-symbols-outlined text-3xl">cottage</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)]">Residential Interiors</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Creating beautiful and functional living spaces tailored to you.</p>
            </div>
            <div className="flex flex-col gap-4 rounded border border-neutral/50 bg-white/30 dark:bg-primary/20 dark:border-neutral/20 p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <span className="material-symbols-outlined text-3xl">domain</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)]">Commercial Interiors</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Designing inspiring and productive environments for your business.</p>
            </div>
            <div className="flex flex-col gap-4 rounded border border-neutral/50 bg-white/30 dark:bg-primary/20 dark:border-neutral/20 p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <span className="material-symbols-outlined text-3xl">construction</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)]">Renovation</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Breathing new life into existing spaces with thoughtful updates.</p>
            </div>
            <div className="flex flex-col gap-4 rounded border border-neutral/50 bg-white/30 dark:bg-primary/20 dark:border-neutral/20 p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <span className="material-symbols-outlined text-3xl">view_in_ar</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)]">3D Design</h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">Visualizing your project with stunning, photorealistic renderings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-neutral/30 dark:bg-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-5xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">A glimpse into our world of bespoke interior design.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-[450px]">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHKPIM4YES0Yz6Z9CPqaxTVfo2dZYnXEsCaD5oPB50Eq8R3a8AbbKaYwnqCX05favaPrMSQnOo9J4rbapa8MDCEKapnzilBiQU0sDbPYLKVrL7lAfmSu3kC9ZSB6ld5KXrJX7Q-653urgPRBfnVKJoAO4wC_apO1kA-m8Dex_vB07YAAr3gO969XGAQj8W0ro9UbrrSANW4aHzxnRmzLaPOLO9c8fpkzVnpH0u1RTi-cl-0a_cNfeuFs-kiQJOL7g0U__YyqK60mEy"
                alt="Modern living room with a gray sofa and wooden accents"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-white">Modern Villa</h3>
                <p className="text-sm text-neutral">Aspen, Colorado</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg lg:col-span-2 h-[450px]">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGRwlokyHDABnS97LIllEpIn7PvRm5h1XRFspE7iJ_iADyOzGmEHxqNij4dPa-dshaF7kBqSenG3Xjn_VfSh4dehq2Xv0b5svWZ-YTx9b4A-bW6uXZZyIIAJZXNoHNDQ65TNMtzHLU1DctMg2oA_KRbVRECtTBfa8fM3bZ5XNulltgn9_xebrog3J-qt4zbGDwUjdkpSHvWkkLzvU86fuQMQA4bqWoNsp9ztZmCepaW5pOXxPywXLBqdwH2PXr-uUrkLKQovknU8GR"
                alt="Scandinavian style dining area with light wood furniture"
                width={1200}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-white">Scandinavian Loft</h3>
                <p className="text-sm text-neutral">Stockholm, Sweden</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg lg:col-span-2 h-[450px]">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaG5noQ_eGOVaAIHkGEfR4di4FNmfBkOnAzKW6UXqvunS0a96KudLgGtAm3xVJWFt-NVpER13j9gJWAOMEAH2-e_K8Y3dxG1v0iFNCp61P2AB5e3DKLK8kuUGGRfkrNFmYKS6RDsPiZUCTEDUiJ-12lF9T8AoNNZw6X97GiJ_h4VHNHizNsdAQBXqtyN7wm4qX_L3-2g0GCM6GCF1x-p-Fn_GSijypzeMgyDzlAUPbTuA3Ur_n5KSstMDwClTpSQ-IHYaiPHLU5Dbo"
                alt="Minimalist bedroom with a large window and neutral tones"
                width={1200}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-white">Minimalist Retreat</h3>
                <p className="text-sm text-neutral">Kyoto, Japan</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-[450px]">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm_QoI5DPg8NyCgUj0EKHjxioM11o73gFGWWExj9NYMPexUgwRpWx4YPugOj7eD7P0LUMPPfFME-tm1i8RJV-WlXh6OxibuFQ6basQ0VijygHeLKkhZneH4u2LEcme5j7xXS7-HpNGCx5y44VQ1UFaYkkTwLVt7zLzexBq8G8i0IDlQKt7D50XTqHSIYxLQkkwHrA3voP8uh2tY4hKOZuTcnQoHskOf0lrPRe_v8ShVqQ5cl8PP8Q2Oo9pmDMfgXsuYzdmVH6XW144"
                alt="Cozy living room with fireplace and plush seating"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-white">Urban Apartment</h3>
                <p className="text-sm text-neutral">New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold tracking-tight sm:text-5xl">Our Process</h2>
            <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">A seamless journey from concept to creation.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="text-center">
              <div className="relative mb-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-grey shadow-lg">
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-bold">Consultation</h3>
              <p className="mt-2 text-sm text-text-light/70 dark:text-text-dark/70">Understanding your vision, needs, and lifestyle.</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-grey shadow-lg">
                  <span className="text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-bold">3D Concept</h3>
              <p className="mt-2 text-sm text-text-light/70 dark:text-text-dark/70">Bringing ideas to life with detailed visualizations.</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-grey shadow-lg">
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-bold">Execution</h3>
              <p className="mt-2 text-sm text-text-light/70 dark:text-text-dark/70">Meticulous management from start to finish.</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-grey shadow-lg">
                  <span className="text-2xl font-bold">4</span>
                </div>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-bold">Final Handover</h3>
              <p className="mt-2 text-sm text-text-light/70 dark:text-text-dark/70">Revealing your transformed space, ready to be enjoyed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-gradient-to-b from-white to-[#fcfbf8] dark:from-gray-900 dark:to-[#221d10] py-16 lg:py-24 border-b-2 border-accent/20">
        <div className="px-4 sm:px-6 lg:px-10 xl:px-40 max-w-[1200px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h1 className="font-[family-name:var(--font-playfair)] text-[#1A2A44] dark:text-white text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-[#9a864c] dark:text-gray-400 text-lg mt-3 max-w-xl mx-auto">Let's design your dream space together.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-16 lg:mb-24">
            <div className="lg:col-span-2">
              <div className="w-full overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg h-full">
                {/* Top Image Section */}
                <div className="relative">
                  <div className="aspect-[4/3] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsqN6mQ9Wz9cKOOGvO829xiBgfmrP2NTjzifGuW0XrIVSGQUVNgVQL9GStdclqVm45M0UgZsSitXo8iK3XqzZ6SWmM9MbgRogBbpzozTTLXHNQ6Gq-6JKmGeSyB6qREMAJY9ltd7r6GF1XGclDJfDbLMst3QE9K0B6JhiA_k1FpCG8l2Pk1rh7LMMCGykjpNzUwc7ZF6bEmk-HPELX0jkM5kx75vq0yrrUAg0NZfVEa27sTFPrWl9FHBvwXalmD2iIgDcRHG2aoyrH')" }} />
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col gap-4 p-5">
                  <h1 className="text-2xl font-extrabold text-[#F77F28] dark:text-[#F77F28]">Bindu Designs – Office</h1>
                  <div className="flex flex-col gap-3 text-[#0D1B2A] dark:text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-[#F77F28]">location_on</span>
                      <p className="text-sm">Your complete office address here (City, Area, State, Pincode)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-[#F77F28]">phone</span>
                      <p className="text-sm">Your phone number here</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-[#F77F28]">schedule</span>
                      <p className="text-sm">Office Hours: 10:00 AM – 7:00 PM (Mon–Sun)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#FDFBFA] dark:bg-gray-800/20 p-8 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="full-name">Full Name</label>
                    <input className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="full-name" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="email">Email Address</label>
                    <input className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="email" placeholder="you@example.com" type="email" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="phone">Phone Number</label>
                    <input className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="phone" placeholder="+91 00000 00000" type="tel" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="project-type">Project Type</label>
                    <select className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="project-type">
                      <option>Home Interior</option>
                      <option>Commercial</option>
                      <option>Renovation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="budget">Budget Range</label>
                    <select className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="budget">
                      <option>₹1-5 Lakhs</option>
                      <option>₹5-10 Lakhs</option>
                      <option>₹10 Lakhs+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="message" placeholder="Tell us about your project..." rows={4}></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button className="w-full bg-[#D4AF8B] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300" type="submit">Send Enquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mb-16 lg:mb-24 bg-white/50 dark:bg-gray-800/30 rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-10">
              <p className="text-accent text-sm font-bold uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-[#1A2A44] dark:text-white text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Reviews Carousel */}
            <div className="relative mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#FDFBFA] dark:bg-gray-800/20 p-6 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none flex flex-col items-center text-center">
                  <Image className="size-16 rounded-full object-cover mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc9NVmH2zBRrpJRlnJjbZ92MF_XPEtIYAZvvON01C7sxP9v09z1qZ5WZtafSlK_Fq3aJJsNFmsADWSvHgzCwSSAdMl5W50DgJns7xGtd3DEQIwdC753Xpr8KznlvFjEA-Ha_IUvbG1ZgUFdqxTexDMGEACDYWOxrML2bgmdRcY0NSHuL7kbfMCvvT2Qos4f6gZ6_ONPibmEmQEoAZ1w8qb88gG01mBidRG84q0d6Ti7YCh8m8V-QrVPLrfXo9-CfNrLYxv0Dyyd74_" alt="Client photo" width={64} height={64} />
                  <h3 className="font-bold text-[#1A2A44] dark:text-white text-lg">Sarah Johnson</h3>
                  <div className="flex text-yellow-500 my-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-sm text-[#9a864c] dark:text-gray-400">&quot;Bindu Designs transformed our house into a home. Their attention to detail is impeccable.&quot;</p>
                </div>
                <div className="bg-[#FDFBFA] dark:bg-gray-800/20 p-6 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none flex flex-col items-center text-center">
                  <Image className="size-16 rounded-full object-cover mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdkzuQOBY00PsqAWq8hwZF13OzzJlusfdox1eRWveNK5YFKtJWt5GjqUrRfDQ52owBxglIXoNd2yjheicaBW5B__4HtiIhgN8G7Xpw7SdMt2ZzUnyKUqgp4HHZVDy5GCGA02sC_g7jgkK0kbBtvDPSCE_wCgZlA9TKDmEEQ3XHrlRj7g-N6LndM9rzMJB0JOMDHdq6w3BlQQ13mygE847xIdgDKmU-AOq5xl6-UC-pyEAbWXCzW7RXPUGM6l8lIYEtXUJrT4MlK4am" alt="Client photo" width={64} height={64} />
                  <h3 className="font-bold text-[#1A2A44] dark:text-white text-lg">Michael Chen</h3>
                  <div className="flex text-yellow-500 my-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-sm text-[#9a864c] dark:text-gray-400">&quot;The commercial space they designed for us has been a game-changer for our business.&quot;</p>
                </div>
                <div className="bg-[#FDFBFA] dark:bg-gray-800/20 p-6 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none flex flex-col items-center text-center">
                  <Image className="size-16 rounded-full object-cover mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4GceI6IFmxG2vY8AS9CpIBg8doHQzKWQzT5rddqKn0HCtCO0dSfgBW9yKOcWG-bGaVBWDFhWc86u_zWuxaXf95O2zTjWLEQNIzyVLHzd5CJWYrWmSl1Bhiu3FsxKTqNkb9fLwOueqQM87Klfs3tnwucmC05dnZanJD9LjNaDNXxGM5QXNrtDf1f3_kWKSjIuRkN_Bth2gtDtS1BDrNZLe5MjExJs1Kc-N6Dsf_mMk7qY6thkx3UQ2AKpTOWzodQKLNB8RvQh306in" alt="Client photo" width={64} height={64} />
                  <h3 className="font-bold text-[#1A2A44] dark:text-white text-lg">David Rodriguez</h3>
                  <div className="flex text-yellow-500 my-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-sm text-[#9a864c] dark:text-gray-400">&quot;Professional, creative, and delivered beyond our expectations. Highly recommend!&quot;</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 text-accent p-3 rounded-full hover:text-accent/70 transition-all duration-300 z-10">
                <span className="material-symbols-outlined text-4xl">chevron_left</span>
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 text-accent p-3 rounded-full hover:text-accent/70 transition-all duration-300 z-10">
                <span className="material-symbols-outlined text-4xl">chevron_right</span>
              </button>
            </div>

            {/* View All Reviews Button */}
            <div className="text-center mb-12">
              <button className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300">
                View All Reviews
              </button>
            </div>

            {/* Write a Review Form */}
            <div className="bg-[#FDFBFA] dark:bg-gray-800/20 rounded-xl p-6 lg:p-8 shadow-lg">
              <h3 className="font-[family-name:var(--font-playfair)] text-[#1A2A44] dark:text-white text-2xl font-bold mb-6 text-center">Share Your Experience</h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="reviewer-name">Your Name</label>
                  <input className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="reviewer-name" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="reviewer-email">Email Address</label>
                  <input className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="reviewer-email" placeholder="you@example.com" type="email" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2 text-center">Rating</label>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" className="text-gray-300 hover:text-yellow-500 transition-colors group" onClick={(e) => {
                        const stars = e.currentTarget.parentElement?.querySelectorAll('button');
                        stars?.forEach((s, idx) => {
                          const span = s.querySelector('span');
                          if (idx < star && span) {
                            span.style.fontVariationSettings = "'FILL' 1";
                            s.classList.add('text-yellow-500');
                            s.classList.remove('text-gray-300');
                          } else if (span) {
                            span.style.fontVariationSettings = "'FILL' 0";
                            s.classList.remove('text-yellow-500');
                            s.classList.add('text-gray-300');
                          }
                        });
                      }}>
                        <span className="material-symbols-outlined text-3xl">star</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#1A2A44] dark:text-gray-300 mb-2" htmlFor="review-text">Your Review</label>
                  <textarea className="w-full bg-[#f3f0e7] dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-[#D4AF8B] focus:border-[#D4AF8B] px-4 py-2" id="review-text" placeholder="Share your experience with us..." rows={4}></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full bg-[#D4AF8B] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300" type="submit">Submit Review</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Design Studio Section */}
      <section className="bg-white dark:bg-gray-900 py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-10 xl:px-40 max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-[family-name:var(--font-playfair)] text-[#1A2A44] dark:text-white text-4xl sm:text-5xl font-bold">Our Location</h3>
            <p className="text-[#9a864c] dark:text-gray-400 text-lg mt-3 max-w-xl mx-auto">Come see our latest designs and discuss your project in person</p>
          </div>
          <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.9899388373!2d79.00169135064613!3d21.16106560946777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[80%] contrast-120 sepia-[20%]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-white sm:text-5xl">Let&apos;s Design Your Dream Space</h2>
          <p className="mt-4 text-lg leading-6 text-neutral">Get in touch to start your journey with us.</p>
          <a href="#contact" className="mt-8 flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-8 bg-[#25D366] text-white text-base font-bold shadow-md hover:brightness-110 transition-all mx-auto w-fit">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="truncate">For Enquiry</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light dark:bg-background-dark border-t border-neutral/50 dark:border-neutral/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-cormorant)]">Bindu Designs</h2>
              <p className="mt-4 text-sm text-text-light/70 dark:text-text-dark/70">Creating timeless interiors with a modern, elegant touch.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent" href="#">About</a></li>
                <li><a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent" href="#">Portfolio</a></li>
                <li><a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent" href="#">Residential</a></li>
                <li><a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent" href="#">Commercial</a></li>
                <li><a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent" href="#">Renovation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-text-light/70 dark:text-text-dark/70">
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-text-light/70 dark:text-text-dark/70">
                  <span className="material-symbols-outlined text-base">email</span>
                  <span>hello@bindu.design</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-light/70 dark:text-text-dark/70">
                  <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
                  <span>123 Design Lane,<br />New York, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral/50 dark:border-neutral/20 pt-8 text-center text-sm text-text-light/50 dark:text-text-dark/50">
            <p>© 2024 Bindu Designs. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
