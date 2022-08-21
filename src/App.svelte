<script>
  import './app.css';
  import Layout from './routes/__layout.svelte'
  import Router from "svelte-spa-router"
  import Index from './routes/index.svelte';
  import Contact from './routes/contact.svelte';
  import Privacy from './routes/privacy.svelte';
  import Terms from './routes/terms.svelte';
  import NotFound from './routes/NotFound.svelte';

  let routes = {
    "/": Index,
    "/contact":Contact,
    "/privacy":Privacy,
    "/terms":Terms,

    "*": NotFound

  }
</script>
<main>
  <Router {routes} />

  <Layout />
</main>

