
@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')


<section id="configuration" class="create-jobwrp">
    <div class="row">
        <div class="col-12">
            <div class="card rounded pad-20">
                <div class="card-content collapse show">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <h1><a href="javascript:;">Create Job</a></h1>
                            </div>
                        </div>
                        <span>
                            <form class="create-job">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc">
                                            <div id="headingCollapse11" class="card-header"><a data-toggle="collapse" href="#collapse11" aria-expanded="true" aria-controls="collapse11" class="card-title lead">Job Details </a></div>
                                            <div id="collapse11" role="tabpanel" aria-labelledby="headingCollapse11" class="bg-qqq collapse show" style="">
                                                <div class="card-content">
                                                    <div class="card-body mt-sm-0 mt-2">
                                                        <div class="row">
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Job Category*</p>
                                                                <span>
                                                                    <select name="category_id" class="job-cat bg-glass">
                                                                        <option value="5">Internship </option>
                                                                        <option value="4">james </option>
                                                                        <option value="1">jay </option>
                                                                    </select>
                                                                    <span class="text-danger">The Job Category field is required</span>
                                                                </span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Job Title*</p>
                                                                <span><input type="text" name="job_title" placeholder="Job Title" class="u-edit-txt" /> <span class="text-danger">The Job Name field is required</span></span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0 mt-lg-3">
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Company Name*</p>
                                                                <span><input type="text" name="company_name" placeholder="Company Name" class="u-edit-txt" /> <span class="text-danger"></span></span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Salary Range</p>
                                                                <input type="text" name="salary_range" pattern="[0-9]{0,9}-[0-9]{0,9}" placeholder="€123 - €124" class="u-edit-txt" />
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Apply Before*</p>
                                                                <span>
                                                                    <div class="u-edit-txt mx-datepicker" id="apply-before">
                                                                        <div class="mx-input-wrapper">
                                                                            <input name="date" type="text" autocomplete="off" placeholder="" class="mx-input" />
                                                                            <i class="mx-icon-calendar">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
                                                                                    <path
                                                                                        d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                                                                                    ></path>
                                                                                </svg>
                                                                            </i>
                                                                        </div>
                                                                    </div>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0 mt-lg-3">
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Period Of Employment *</p>
                                                                <span>
                                                                    <select name="period_of_employment" id="" class="job-cat">
                                                                        <option value="" selected="selected" disabled="disabled">
                                                                            Select
                                                                        </option>
                                                                        <option value="Permanent">Permanent </option>
                                                                        <option value="Contract Based">
                                                                            Contract Based
                                                                        </option>
                                                                        <option value="parttime">Part Time </option>
                                                                    </select>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Hours Of Work*</p>
                                                                <span>
                                                                    <select name="hours_of_work" class="job-cat bg-glass">
                                                                        <option value="" selected="selected" disabled="disabled">
                                                                            Select
                                                                        </option>
                                                                        <option value="Full Time">Full Time </option>
                                                                        <option value="Part Time">Part Time </option>
                                                                    </select>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="row my-2">
                                                            <div class="col-12 text-center text-md-left"><video id="video-preview" controls="controls" style="display: none;"></video></div>
                                                            <div class="col-12 text-center text-md-left">
                                                                <label>Upload Video <input name="file" type="file" accept="video/*" /></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="headingCollapse12" class="card-header"><a data-toggle="collapse" href="#collapse11" aria-expanded="true" aria-controls="collapse11" class="card-title lead">Address Details </a></div>
                                            <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12" class="collapse show bg-qqq">
                                                <div class="card-content">
                                                    <div class="card-body mt-sm-0 mt-2">
                                                        <div class="row">
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Address*</p>
                                                                <span><input type="text" name="address" value="Abc street" class="u-edit-txt" /> <span class="text-danger"></span></span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">County*</p>
                                                                <span>
                                                                    <select name="country" class="job-cat">
                                                                        <option value="Galway">Galway </option>
                                                                        <option value="Leitrim">Leitrim </option>
                                                                        <option value="Mayo">Mayo</option>
                                                                        <option value="Roscommon">Roscommon </option>
                                                                        <option value="Sligo">Sligo</option>
                                                                        <option value="Carlow">Carlow </option>
                                                                        <option value="Dublin">Dublin </option>
                                                                        <option value="Kildare">Kildare </option>
                                                                        <option value="Kilkenny">Kilkenny </option>
                                                                        <option value="Laois">Laois</option>
                                                                        <option value="Longford">Longford </option>
                                                                        <option value="Louth">Louth</option>
                                                                        <option value="Meath">Meath</option>
                                                                        <option value="Offaly">Offaly </option>
                                                                        <option value="Westmeath">Westmeath </option>
                                                                        <option value="Wexford">Wexford </option>
                                                                        <option value="Wicklow">Wicklow </option>
                                                                        <option value="Clare">Clare</option>
                                                                        <option value="Cork">Cork</option>
                                                                        <option value="Kerry">Kerry</option>
                                                                        <option value="Limerick">Limerick </option>
                                                                        <option value="Tipperary">Tipperary </option>
                                                                        <option value="Waterford">Waterford </option>
                                                                        <option value="Cavan">Cavan</option>
                                                                        <option value="Donegal">Donegal </option>
                                                                        <option value="Monaghan">Monaghan </option>
                                                                        <option value="Antrim">Antrim </option>
                                                                        <option value="Armagh">Armagh </option>
                                                                        <option value="Fermanagh">Fermanagh </option>
                                                                        <option value="Down">Down</option>
                                                                        <option value="Londonderry"> Londonderry</option>
                                                                        <option value="Tyrone">Tyrone </option>
                                                                    </select>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-md-1">
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">State</p>
                                                                <span><input type="text" name="state" value="abc state" class="u-edit-txt" /> <span class="text-danger"></span></span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">City</p>
                                                                <span><input type="text" name="city" value="abc city" class="u-edit-txt" /> <span class="text-danger"></span></span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Post code</p>
                                                                <span><input type="number" name="zip_code" value="10001" class="u-edit-txt" /> <span class="text-danger"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="headingCollapse13" class="card-header"><a data-toggle="collapse" href="#collapse11" aria-expanded="true" aria-controls="collapse11" class="card-title lead">Job responsibilities </a></div>
                                            <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse13" class="collapse show bg-qqq">
                                                <div class="card-content">
                                                    <div class="card-body mt-sm-0 mt-2">
                                                        <div class="row">
                                                            <div class="col-xl-12 t-c">
                                                                <p class="fieldName">Job Description*</p>
                                                                <span>
                                                                    <textarea name="job_descriptions" cols="30" rows="10" class="u-edit-txt">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus.
                                                                    </textarea>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <h4 class="fieldName">Employee Benefits</h4>
                                                                <div class="d-flex align-items-center flex-wrap">
                                                                    <div inline="" class="d-flex align-items-center mr-2"><input type="checkbox" class="mr-1" value="Medical" />Medical</div>
                                                                    <div inline="" class="d-flex align-items-center mr-2"><input type="checkbox" class="mr-1" value="Perks" />Perks</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="headingCollapse14" class="card-header">
                                                <a data-toggle="collapse" href="#collapse11" aria-expanded="true" aria-controls="collapse11" class="card-title lead">Experience Information </a>
                                            </div>
                                            <div id="collapse14" role="tabpanel" aria-labelledby="headingCollapse14" class="collapse show bg-qqq">
                                                <div class="card-content">
                                                    <div class="card-body mt-sm-0 mt-2">
                                                        <div class="row">
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Years Of experience Needed*</p>
                                                                <span>
                                                                    <select name="years_of_experience" class="job-cat">
                                                                        <option value="">Student Placement </option>
                                                                        <option value="1 Year or Less">1 Year or Less </option>
                                                                        <option value="1-2 Years">1-2 Years </option>
                                                                        <option value="2-5 Years">2-5 Years </option>
                                                                        <option value="5-10 Years">5-10 Years </option>
                                                                        <option value="10+ Years">10+ Years </option>
                                                                    </select>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Degree Requirements*</p>
                                                                <span>
                                                                    <select name="degree" class="job-cat">
                                                                        <option value="" selected="selected" disabled="disabled">
                                                                            Select
                                                                        </option>
                                                                        <option value="University">
                                                                            University
                                                                        </option>
                                                                        <option value="College">College </option>
                                                                        <option
                                                                            value="Secondary School or Job
                                                                                Specific Training"
                                                                        >
                                                                            Secondary School or Job Specific Training
                                                                        </option>
                                                                        <option value="No Education Required">No Education Required </option>
                                                                    </select>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-md-1">
                                                            <div class="col-xl-6 col-lg-6 col-md-6 col-12 t-c">
                                                                <p class="fieldName">Skills*</p>
                                                                <span>
                                                                    <textarea name="skill" cols="30" rows="10" required="required" class="u-edit-txt">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus.
                                                                    </textarea>
                                                                    <span class="text-danger"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="headingCollapse15" class="card-header"><a data-toggle="collapse" href="#collapse15" aria-expanded="true" aria-controls="collapse15" class="card-title lead">Smart Questions </a></div>
                                            <div id="collapse15" role="tabpanel" aria-labelledby="headingCollapse15" class="collapse show bg-qqq">
                                                <div class="card-content">
                                                    <div class="card-body mt-sm-0 mt-2">
                                                        <div class="row">
                                                            <div class="col-xl-8 col-lg-8 col-md-8 col-* t-c">
                                                                <span><input type="text" name="question[]" required="required" class="u-edit-txt" /> <span class="text-danger">The question field is required</span></span>
                                                                <span>
                                                                    <i class="fas fa-minus-circle float-right text-danger m-1" style="display: none;">Remove</i> <i class="fas fa-plus-circle float-right text-green mt-1" style="">Add More</i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div><p>Only add three Questions</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-content bg-qqq">
                                                <div class="card-body mt-sm-0 mt-2">
                                                    <div class="row">
                                                        <div class="col-12"><button type="submit" class="green-btn ml-2">Create</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



@endsection