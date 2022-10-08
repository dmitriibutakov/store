<template>
  <div class="contacts__block">
    <h2 class="contacts__title">Contacts</h2>
    <div class="contacts__info">
      <p class="contacts__desc">Telephone:
        <a href="tel:+995-55-54321" class="contacts__link">
          +995-55-54321
        </a>
      </p>
      <p class="contacts__desc">Email:
        <a href="mailto:test_project@yahoo.com" class="contacts__link">
          test_projects@yahoo.com
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.contacts__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .contacts__title {
    font-size: 24px;
    color: #006edb;
    font-weight: 600;
    margin: 10px 0;
  }
  .contacts__info {
    border: 1px solid rgba(134, 133, 133, 0.48);
    border-radius: 20px;
    padding: 10px 15px;
    .contacts__name {
      font-size: 18px;
      font-weight: 500;
      color: #1a1c5b;
      margin-bottom: 5px;
    }
    .contacts__desc {
      display: flex;
      justify-content: space-between;
      line-height: 1.5;
      .contacts__link {
        margin-left: 10px;
      }
    }
  }
}
</style>