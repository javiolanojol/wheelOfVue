<template>
  <div>
    <h1>Wheel of Vue</h1>
    <hr>
    <main>
      <Mongui/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Mongui from "@/components/Mongui";

export default {
  name: 'Home',
  components: {
    Mongui,
    Footer

  }
}
</script>
