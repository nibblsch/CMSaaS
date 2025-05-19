<script lang="ts">
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="navbar bg-base-100 container mx-auto px-4">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl font-bold" href="/">
      <span class="text-primary">BabyGPT</span>
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex font-medium text-base">
      <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
      <li class="md:mx-2"><a href="/#testimonials">Testimonials</a></li>
      <li class="md:mx-2"><a href="/contact_us">Contact</a></li>
      <li class="md:mx-2">
        <a href="/login/sign_in" class="btn btn-primary">Sign In</a>
      </li>
      <li class="md:mx-0">
        <a href="/search" aria-label="Search">
          <svg
            fill="currentColor"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
            />
          </svg>
        </a>
      </li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <button type="button" class="btn btn-ghost btn-circle" aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <ul
        class="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-sm bg-base-100 rounded-box w-52 font-medium"
      >
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/#testimonials">Testimonials</a></li>
        <li><a href="/contact_us">Contact</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/login/sign_in" class="btn btn-primary">Sign In</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="min-h-screen">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="grow"></div>
<div class="bg-base-100">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer class="footer p-6 max-w-[1000px] mx-auto">
    <div class="w-full">
      <div class="mb-4">
        <span class="footer-title opacity-80">Explore</span>
        <div class="flex flex-wrap gap-6 mt-2">
          <a class="link link-hover" href="/">Overview</a>
          <a class="link link-hover" href="/pricing">Pricing</a>
          <a class="link link-hover" href="/#testimonials">Testimonials</a>
          <a class="link link-hover" href="/contact_us">Contact Us</a>
        </div>
      </div>
      <div class="text-sm text-neutral/60 text-right">
        © {new Date().getFullYear()} BabyGPT. All rights reserved.
      </div>
    </div>
  </footer>
</div>
