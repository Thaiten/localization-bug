<template>
  <Layout>
    <h1>Page 2</h1>
    <g-link :to="'/'">to Page 1</g-link>
    <!-- <g-link :to="'/'+$context.locale+'/'">to Page 1</g-link> -->
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
    title: 'About us'
  },
  components: {
	  langSwitcher
  }
}
</script>
