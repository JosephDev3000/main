<template>
  <div class="side-bar-dashboard">
    <div class="overlap-group">
      <img class="dashboard-layout" src="../assets/img/logos/dashboard-layout.png" />
      <div class="flex-col">
        <div class="dashboard">Dashboard</div>
        <div class="rectangle-1000"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
  };
</script>

<style>
  .side-bar-dashboard {
    align-items: flex-start;
    cursor: pointer;
    display: flex;
    min-width: 300px;
    transition: all 0.2s ease;
  }

  .side-bar-dashboard:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }

  .overlap-group {
    align-items: flex-start;
    background-color: #618bfb45;
    display: flex;
    height: 106px;
    min-width: 298px;
    padding: 13px 45px;
  }

  .dashboard-layout {
    height: 50px;
    width: 50px;
  }

  .flex-col {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-left: 13px;
    margin-top: 7px;
    min-height: 57px;
    width: 136px;
  }

  .dashboard {
    color: var(--absolute-zero);
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-xxl2);
    font-weight: 700;
    letter-spacing: 0.46px;
    min-height: 28px;
    min-width: 136px;
    text-align: center;
  }

  .rectangle-1000 {
    background-color: var(--absolute-zero);
    height: 4px;
    margin-top: 25px;
    width: 88px;
  }
</style>