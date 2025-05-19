<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Evidence-Based Guidelines",
      description:
        "Our AI assistant is built on the latest medical research and guidelines, ensuring you get accurate and up-to-date information.",
      svgContent: `<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "Pediatrician-Reviewed",
      description:
        "All content is reviewed by board-certified pediatricians to ensure accuracy and safety.",
      svgContent: `<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "24/7 Availability",
      description:
        "Get instant answers to your questions anytime, day or night, without waiting for office hours.",
      svgContent: `<path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
  ]

  const testimonials = [
    {
      quote:
        "BabyGPT has been a game-changer for our family. The instant answers and guidance have given us so much confidence in our parenting journey.",
      author: "Sarah M.",
      role: "First-time parent",
      image: "/images/testimonials/sarah.jpg",
    },
    {
      quote:
        "As a busy parent, having 24/7 access to reliable information has been invaluable. It's like having a pediatrician in your pocket!",
      author: "Michael R.",
      role: "Parent of twins",
      image: "/images/testimonials/michael.jpg",
    },
    {
      quote:
        "The evidence-based approach and pediatrician review give me peace of mind. I know I'm getting accurate information when I need it most.",
      author: "Emily T.",
      role: "Parent of three",
      image: "/images/testimonials/emily.jpg",
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Hero Section -->
  <div class="hero min-h-[80vh] bg-white">
    <div class="hero-content text-center py-12">
      <div class="max-w-4xl">
        <div class="text-4xl md:text-6xl font-bold mb-8">
          <span class="text-[#111827]"> Your AI Assistant </span>
        </div>

        <div class="text-xl md:text-2xl text-neutral mb-12">
          Experience the power of AI with our intelligent chatbot. Get instant
          answers, creative ideas, and helpful insights.
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/login/sign_up">
            <button class="btn btn-primary btn-lg px-8">Get Started</button>
          </a>
          <a href="/pricing">
            <button class="btn btn-outline btn-lg px-8">View Pricing</button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-20 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p class="text-lg text-neutral/80">
          Discover the features that make us stand out
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each features as feature}
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="card-body items-center text-center p-8">
              <div class="w-16 h-16 mb-4 text-primary">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html feature.svgContent}
                </svg>
              </div>
              <h3 class="card-title text-xl mb-2">{feature.name}</h3>
              <p class="text-neutral/80">{feature.description}</p>
              <a href="/pricing" class="mt-4">
                <button class="btn btn-outline btn-primary">Try Now</button>
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- From Anxious to Confident Section -->
  <div class="py-20 px-4 bg-[#f9fafb]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          From Anxious to Confident
        </h2>
        <p class="text-lg text-neutral/80">
          See how BabyGPT helps parents navigate their journey
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-xl mb-4">Before BabyGPT</h3>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-error mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Uncertainty about medical advice</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-error mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Long waits for doctor appointments</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-error mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Conflicting information online</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-xl mb-4">With BabyGPT</h3>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-success mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Evidence-based guidance 24/7</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-success mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Pediatrician-reviewed information</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-success mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Confidence in your decisions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonials Section -->
  <div class="py-20 px-4 bg-white" id="testimonials">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Trusted by 1,000+ Parents
        </h2>
        <p class="text-lg text-neutral/80">See what our community has to say</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each testimonials as testimonial}
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex flex-col items-center text-center">
                <div
                  class="w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    class="w-full h-full object-cover"
                    on:error={(e) =>
                      ((e.target as HTMLImageElement).src =
                        "/images/placeholder-avatar.jpg")}
                  />
                </div>
                <p class="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p class="font-bold">{testimonial.author}</p>
                  <p class="text-neutral/80">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="py-20 px-4 bg-primary text-primary-content">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p class="text-lg mb-8">
        Join thousands of parents who are already using our AI assistant
      </p>
      <a href="/login/sign_up">
        <button class="btn btn-lg bg-white text-primary hover:bg-gray-100"
          >Get Started</button
        >
      </a>
    </div>
  </div>

  <!-- Disclaimer Banner -->
  <div class="bg-base-200 py-6 px-4">
    <div class="max-w-4xl mx-auto text-center text-neutral/80">
      <p class="text-sm flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-warning"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        Important: Using BabyGPT does not create a patient-physician relationship.
        For medical advice, please consult with your pediatrician.
      </p>
    </div>
  </div>
</div>
