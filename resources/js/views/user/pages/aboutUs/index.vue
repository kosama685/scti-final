<template>
	<div>
		 <full-page-header></full-page-header>
		<section class="nav-bg"></section>
		<section class="user-home">
			<div class="container">
				<div class="row mb-5">
					<div class="col-12 text-center">
						<p class="page-heading">Meet the team</p>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 text-center">
						<h5 class="team-name">James Fabiyi</h5>
						<h6 class="team-desig">CEO and Co-Founder</h6>
						<img :src="`${base_url}/assets/images/CEO-JFI.jpg`" class="stok" alt="">
					</div>
					<div class="col-lg-6 text-center">
						<h5 class="team-name">Rusharn Williamson</h5>
						<h6 class="team-desig">CEO and Co-Founder</h6>
						<img :src="`${base_url}/assets/images/CEO-RWN.jpg`" class="stok" alt="">
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12">
						<p class="text-abt">
							James Fabiyi and Rusharn Williamson both science teachers in the UK, discovered SCTI Jobs in June 2020. The idea was birthed from the global pandemic which hindered opportunities despite many people being qualified when applying for roles in their respective fields. The gap between being qualified and securing the position ignited our thoughts into action, to create SCTI Jobs Net so that the success rate of obtaining job openings increased. We have partnered with several businesses and training providers; and as a result, increasing the success rate of getting the job applied for. <br><br>
							After being inspired by the Black Lives Matter movement, James and Rusharn both had the same vision to allow black people to be exposed to the same opportunities as their counterparts. In order remove bias and to give all people equal prospects, we decided not to include the ethnicity, nationality or sexual orientation criteria in our online application. <br> <br>
							Through continuous professional development James and Rusharn are accredited recruitment consultants and both well equipped to deliver the highest level of consultancy to job seekers.
						</p>
					</div>
				</div>
			</div>
		</section>
		<full-page-footer></full-page-footer>
	</div>
	
</template>
<script>
const FullPageFooter = () => import('../../components/FullPageFooter.vue');
const FullPageHeader = () => import('../../components/FullPageHeader.vue');
export default {
    created() {
    },
    components: {
        FullPageFooter,
        FullPageHeader,
    },
}
</script>