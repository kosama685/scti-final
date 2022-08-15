<template>
	<div class="personal-details-wrapper career-details-wrapper mt-5">
		<h2>Career Details</h2>

		<div class="row" :key="index" v-for="(questionnaire,index) in questionaires.data">
			<div class="col-lg-9">
				<p> <strong class="pr-2">Q{{index+1}}:</strong> {{questionnaire.questions}} </p>
				<div v-if="questionnaire.answer_type == 'checkbox'" class="row">
					<div class="d-flex justify-content-between" :key="index" v-for="(answer,index) in JSON.parse(questionnaire.answers)">
						<div class="remember-sec-wrapper register-main px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
								<label class="check">{{answer}}
									<input spellcheck="true" :name="'value_'+questionnaire.id+'[]'" type="checkbox" :value="answer">
									<span class="checkmark"></span>
								</label>
								<div class="text-danger">{{errors[0]}}</div>
							</ValidationProvider>

						</div>
					</div>
				</div>
				<div v-else-if="questionnaire.answer_type == 'radio'" class="row">
					<div class="d-flex justify-content-between round-checkbox" :key="index" v-for="(answer,index) in JSON.parse(questionnaire.answers)">
						<div class="remember-sec-wrapper px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
							<label class="check">{{answer}}
								<input spellcheck="true" :name="'value_'+questionnaire.id+'[]'" type="checkbox" :value="answer">
								<span class="checkmark"></span>
							</label>
							<div class="text-danger">{{errors[0]}}</div>
						</ValidationProvider>
						</div>
					</div>
				</div>
				<div v-else-if="questionnaire.answer_type == 'textarea'" class="row">
					<div class="col-lg-8">
						<div class="remember-sec-wrapper px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
								<textarea class="w-100 ans-sec" :name="'value_'+questionnaire.id+'[]'" ></textarea>
								<div class="text-danger">{{errors[0]}}</div>
							</ValidationProvider>
						</div>
					</div>
				</div>

				<div v-else-if="questionnaire.answer_type == 'dropdown'" class="row">
					<div class="col-lg-6">
						<div class="remember-sec-wrapper px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
							<select :name="'value_'+questionnaire.id+'[]'" id="" class="select-opt w-100">
								<option :key="index" v-for="(answer,index) in JSON.parse(questionnaire.answers)" :value="answer">{{answer}}</option>
							</select>
							<div class="text-danger">{{errors[0]}}</div>
						</ValidationProvider>
						</div>
					</div>
				</div>
				<div v-else-if="questionnaire.answer_type == 'file'" class="row">
					<div class="col-lg-6">
						<div class="remember-sec-wrapper px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
								<input type="file" name="file" :name="'value_'+questionnaire.id+'[]'"/>
								<div class="text-danger">{{errors[0]}}</div>
							</ValidationProvider>
						</div>
					</div>
				</div>
				<div v-else-if="questionnaire.answer_type == 'date'" class="row">
					<div class="col-lg-8">
						<div class="remember-sec-wrapper px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
								<input type="date" :name="'value_'+questionnaire.id+'[]'"  />
								<div class="text-danger">{{errors[0]}}</div>
							</ValidationProvider>
						</div>
					</div>
				</div>
				<div v-else-if="questionnaire.answer_type == 'time'" class="row">
					<div class="col-lg-8">
						<div class="remember-sec-wrapper px-0">
							<ValidationProvider tag="div" name="Check Box" v-slot="{errors}">
								<input type="time" :name="'value_'+questionnaire.id+'[]'"/>
								<div class="text-danger">{{errors[0]}}</div>
							</ValidationProvider>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default{
    inject: ['formatDate'],
    data() {
      return {
        questionaires: {},
        answers:{},
      };
    },
    async created() {
      await this.getQuestionaire();
    },
    methods: {
      async getQuestionaire() {
        let res = (await axios.get('/api/public/getQuestionaire'));
        this.questionaires = res.data;

        //console.log(JSON.parse(JSON.stringify(this.questionaires.data[0].answers)));
      },
    }
  };
</script>
