<template>
  <div>
    <div class="about-page-wrapper">
      <!-- First part -->
      <div class="about-first-part-content">
        <div class="about-left">
          <div class="about">
            Who we are
          </div>
          <div>
            Welcome to Nairabee, a fintech platform merging "Naira," Nigeria's currency, with "bee," symbolizing our
            commitment
            to Nigeria's financial landscape and a collaborative, community-driven approach. Nairabee represents
            financial
            empowerment and shared prosperity, providing innovative solutions for Nigeria's unique needs.
          </div>
          <div>
            Our mission is to facilitate financial inclusion and empower individuals to achieve their goals. Whether
            saving, investing,
            or managing finances, Nairabee supports users every step of the way. We aim to create a world where
            financial
            empowerment and shared prosperity converge, making a meaningful impact on lives across Nigeria. Join us on
            this
            journey toward a brighter financial future.
          </div>
        </div>
        <div class="about-right">
          <img src="/Asset 23.png" alt="">
        </div>
      </div>


      <!-- Second part 1 -->
      <div class="about-meat-teams">
        <div>
          <div class="team-workers">
            <div>
              Meet Teams
            </div>
          </div>
          <div class="behind">
            Behind The Creative Process Of Building The Nairabee FinTech
          </div>
        </div>

        <div class="team-members">
          <div>
            <img src="/Naira1ceo.png" alt="">
            <div class="member-name">Hassan Umar</div>
            <div class="member-role">Chief Executive Officer (CEO)</div>
          </div>

          <div>
            <img src="/Naira2coo.png" alt="">
            <div class="member-name">Hussain Umar</div>
            <div class="member-role">Chief Operations Officer (CO)</div>
          </div>

          <div>
            <img src="/Naira3cto.png" alt="">
            <div class="member-name">Ahmad Mustapha</div>
            <div class="member-role">Chief Technology Officer (CTO)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.about-page-wrapper {
  display: grid;
  justify-content: space-around;
  background-image: url('/Asset 22.png');
  background-position: top right;
  background-size: 450px;
  background-repeat: no-repeat;
  font-family: Montserrat;
  width: 100%;
}

.about-first-part-content {
  width: 85%;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.about-left {
  text-align: justify;
  width: 40%;

}

.about-left :first-child {
  margin-top: 40px;
}

.about-left :last-child {
  margin-top: 30px;
}

.about-right {
  display: flex;
  justify-content: center;
}

.about-right img {
  width: 120px;
}

.team-workers {
  width: 85%;
  font-size: 25px;
  font-weight: bolder;
}


.about-meat-teams {
  background-color: #fbfbfb;
  padding-top: 25px;
  padding-bottom: 25px;

  width: 100%;
  margin: 10px auto;
  display: flex;
  /* Changed from grid to flex */
  flex-direction: column;
  /* Added to align content vertically */
  align-items: center;
  /* Added to center horizontally */
  text-align: center;
  /* Changed from text-justify to text-align */
}

.team-members{
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 85%;
  margin-top: 40px;
}
.team-members img{
  border: 10px solid #f17540;
  border-radius: 50%;
  width: 300px;
  padding: 0px;

}

.member-name{
  margin-top: 8px;
}

@media screen and (max-width: 874px) {
  .about-page-wrapper {
    background-size: 150px;
  }

  .about-right {
    display: none;
  }

  .about-first-part-content :last-child {
    /* display: none; */
    margin: 20px auto;
  }

  .about-first-part-content {
    margin-top: 90px;
    width: 100%;
  }

  .about-left {
    margin: -70px auto;
    display: grid;
    width: 85%;
  }

  .about {
    font-size: 15px;
  }

  /* second part  */

  .team-second-part {
    width: 100%;
  }

  .team-workers {
    margin: auto;
  }

  .team-content {
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .team-left {
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
  }

  .team-left img {
    width: 100%;
    /* Adjust image width to fit container */
    max-width: 300px;
    /* Set a maximum width for the image */
  }

  .team-right {
    margin-top: 10px;
    padding: 0px;
    text-align: justify;
  }

  .team-content :first-child img {
    margin: auto;
  }
.about-meat-teams{
  width: 100%;
}
  .team-members{
    display: grid;
    width: 80%;
  }

}
</style>