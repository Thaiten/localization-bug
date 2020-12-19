<template>
  <div>
	  <span v-for="locale in availableLocales" :key="locale" class="langButton" :class="{active: (locale == currentLocale)}" @click="localeChanged(locale)">{{locale}}</span>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
		localeChanged (lang) {
			this.currentLocale = lang;
			this.$i18n.locale = lang;
			console.log(this.$i18n.locale)
			this.$router.push({
				path: this.$tp(this.$route.path, lang, true)
			})
		}
  }
}
</script>

<style lang="css">
	.langButton{
		cursor: pointer;
	}
	.langButton.active{
		font-weight: 600;
	}
	.langButton::after{
		content: " / ";
	}
	.langButton:last-of-type::after{
		content: ""
	}
</style>