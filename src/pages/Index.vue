<template>
  <Layout>
    <h1>Page 1</h1>
    <g-link :to="'/about/'">to Page 2</g-link>
    <!-- <g-link :to="'/'+$context.locale+'/about/'">to Page 2</g-link> -->
    <p>
      {{$t("text")}}
    </p>
    <langSwitcher></langSwitcher>
  </Layout>
</template>

<script>
import langSwitcher from "@/components/langSwitcher"
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
	  langSwitcher
  }
}
</script>