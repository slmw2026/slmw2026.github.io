---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
---
<img src="/images/slmw2026_colm_chatgpt.png" style="pointer-events: none; user-select: none;">

 
<!-- Latest Updates at the top of the main page! -->
<!-- <div style="
  border: 1px solid #ccc; 
  border-radius: 15px; 
  padding: 20px; 
  width: 100%; 
  background-color: #f9f9f9;">
  <h2 style="margin-top: -10px;">📰 <b>Latest Updates</b></h2>
    <ul>
    <span class="news-item-icon">📢</span> <b>author notifications have been released on Oct. 9th. 
	</b>
	<p>
    We have added a special fast track for papers reviewed at NeurIPS 2024 that were not accepted. Authors can submit their papers with a link to their (anonymous) OpenReview page, giving our program committee access to the reviews of their paper.
  	</p>
	<span class="news-item-icon">📢</span> Our Submission Portal will remain open until September 18th, AOE, for editing existing submitted papers. 
     Add more news items as needed 
  </ul>
</div>  -->


<h2 class="blackpar_title" id="overview">Overview</h2>
<p>
This workshop addresses one of the most pressing challenges in modern AI deployment: enabling sophisticated language model capabilities on resource-constrained edge devices. While large language models (LLMs) have demonstrated remarkable capabilities, their dependence on cloud infrastructure creates fundamental barriers to widespread adoption, including latency constraints, privacy concerns, connectivity requirements, and substantial computational costs. Small language models (SLMs) offer a compelling alternative, enabling autonomous AI agents to operate directly on edge devices such as smartphones, IoT systems, robotics platforms, and embedded systems.
</p>
<p>
  The workshop will explore the intersection of three rapidly evolving fields:
  (1) efficient language model architectures and compression techniques,
  (2) agentic AI systems capable of autonomous reasoning and tool use, and
  (3) edge computing and on-device deployment.
</p>

<p><strong>Key topics include:</strong></p>

<ul style="margin-top: 0; padding-left: 1.5em;">
  <li>Architectural innovations for parameter-efficient language models</li>
  <li>Model compression techniques: quantization, pruning, knowledge distillation</li>
  <li>On-device inference optimization and hardware-aware model design</li>
  <li>Agentic capabilities in constrained environments: planning, tool use, multi-step reasoning</li>
  <li>Privacy-preserving local AI processing and federated learning approaches</li>
  <li>Real-world deployment case studies: mobile assistants, robotics, healthcare, automotive</li>
  <li>Benchmarking and evaluation methodologies for edge-deployed SLMs</li>
</ul>


<!-- Call for Papers -->
<h2 class="blackpar_title" id="call_for_papers">Call for Papers</h2>
<p><b>To Be Announced</b></p>
<!-- <p> -->
<!-- <p>
hkjashdljajlkdja;lksalk;djaslkfjlskdj;kfs
</p> -->
<!-- Investing in the future of language and foundation models requires a concrete effort to enhance their efficiency across multiple dimensions (including architecture, training, and inference) and having a comprehensive evaluation framework. 
To encourage engagement from the NeurIPS community, we present several active research topics in this field that invite participation and contributions. The scope of this workshop includes, but not limited to, the following topics:
<br><br>
<b>Efficient Architectures</b> Proposing alternative architectures that are more efficient than Transformers (in terms of computational complexity, memory footprint, handling longer sequence lengths ) or modifying Transformer architectures to make them more efficient  
<ul>
	<li>Linear and sub-quadratic Transformers , sparse attention Transformers</li>
	<li>New architures for LLMs and foundation models and their scalability</li>
	<li>Evaluation and benchmarking of new architectures (fair comparison of different models)</li>
	<li>Long sequence modeling</li>
	<li>Dense vs. sparse architectures (MoEs)</li>
</ul>
<b>Efficient Training</b> How can we reduce the cost of pre-training or fine-tuning new models?
<ul>	
	<li>More efficient pre-training solutions, from better initialization and hyper-parameter tuning to better optimization which lowers the cost of pre-training</li>
	<li>Parameter efficient fine-tuning  (PEFT) solutions for large pre-trained models</li>
	<li>Efficient instruction tuning,  prompt engineering and in-context learning</li>
	<li>Hardware-aware solutions (e.g. better CUDA kernels), memory read/write aware solutions </li>
	<li>Data-efficient training, reducing the requirement for labeled data, data compression and distillation</li>
</ul>
<b>Efficient Inference</b> How can we reduce the cost of inference for LLMs and foundation models?
<ul>
	<li>Improved speculative sampling for LLMs, self-speculative sampling, selecting among multiple drafts, one draft model for different heterogeneous target models</li>
	<li>Neural model compression techniques such as quantization, pruning, and knowledge distillation</li>
	<li>Improved KV-caching solutions for Transformers</li>
	<li>Distributed inference of large pre-trained models</li>
	<li>Serving many target devices with one model, many-in-one models, early exiting, elastic networks</li>
</ul>
<b>Evaluation and Benchmarking of Efficient Models</b> Introducing new efficient solutions underscores the need for comprehensive benchmarks to accurately evaluate their efficacy and performance. 
<ul>
	<li>Datasets, benchmarks, leaderboards for evaluating efficient models</li>
	<li>Benchmarking the performance of efficient models from different perspectives such as reasoning, hallucination,  understanding, and generation quality </li>
	<li>Benchmarking efficiency of models in terms of their memory footprint, training time, inference time, different target hardware devices and inference platforms (e.g. GPU vs. CPU) </li>
</ul>
<b>Efficient Solutions in other Modalities and Applications </b> 
<ul>
	<li> Efficiency of foundational or pre-trained models in multi-modal set-up and other modalities (beyond NLP and Speech) such as biology, chemistry, computer vision, and time series </li>
	<li>Efficient representations (e.g. Matryoshka representation) and models in dense retrieval and search</li>
	<li>Efficient Federated learning, lower communication costs, tackling heterogeneous data and models</li>
	<li>Efficient graph and LLM joint learning</li>
</ul> -->

<!-- </p> -->

<h2 class="blackpar_title">Submission Instructions</h2>
<p>
<b>Format:</b> Full papers (8 pages) and position papers (4 pages), excluding references, using the COLM 2026 template.

<!-- <b>To Be Announced</b> -->

<!-- You are invited to submit your papers in our CMT submission portal <a href="https://cmt3.research.microsoft.com/ENLSP2024">(Link)</a>. All the submitted papers have to be anonymous for double-blind review. We expect each paper will be reviewed by at least three reviewers. The content of the paper (excluding the references and supplementary materials) should not be more than <b>8 pages for Long Papers</b> and <b>4 pages for Short Papers</b>, strictly following the NeurIPS template style <a href= "https://www.overleaf.com/latex/templates/neurips-2024/tpsbbrdqcmsh">(Link)</a>. Please be advised that the NeurIPS submission checklist is not needed for our workshop submissions. 
<br />
Authors can submit up to 100 MB of supplementary materials separately. Authors are highly encouraged to submit their codes for reproducibility purposes. According to the guideline of the NeurIPS workshops, already published papers are not encouraged for submission, but you are allowed to submit your ArXiv papers or the ones which are under submission (for example <b> any NeurIPS submissions can be submitted concurrently to workshops </b>). Moreover, a work that is presented at the main NeurIPS conference should not appear in a workshop. Please make sure to indicate the complete list of conflict of interests for all the authors of your paper. To encourage higher quality submissions, our sponsors are offering the <b>Best Paper</b> and the <b>Best Poster</b> Awards to qualified outstanding original oral and poster presentations (upon nomination of the reviewers). Bear in mind that our workshop is not archival, but the accepted papers will be hosted on the workshop website. Moreover, we are currently negotiating with a publisher to host opt-in accepted papers in a special issue proceeding for our workshop. -->
</p>

<h2 class="blackpar_title">Important Dates</h2>
<p>
<ul>
	<!-- <li><s>Special NeurIPS Fast Track Submission Deadline: <b>September 30, 2024 Anywhere on Earth (AOE)</b></s></li>
	<li><s>Submission Deadline: September 15, 2024 Anywhere on Earth (AOE)</s> </li>
	<li><s>Acceptance Notification: <b>October 09, 2024 AOE</b></s></li>
	<li>Camera-Ready Submission: <b>October 25, 2024 AOE</b> </li>
	<li>Workshop Date: <b>December 14, 2024 </b></li> -->
	<li>Submission Deadline: <b>August 1, 2026 Anywhere on Earth (23:59 AOE)</b></li>
	<li>Acceptance Notification: <b>September 20, 2026</b></li>
	<li>Camera-Ready: <b>September 20, 2026</b></li>
    <li>Workshop: <b>October 9, 2026</b></li>
</ul>
</p>


<!--Confirmed Speakers-->
<h2 class="blackpar_title" id="speakers">Invited Speakers</h2>
<p>
<!-- {% include speakers.html %} -->
<b>To Be Announced</b>
</p>

<h2 class="blackpar_title" id="speakers">Invited Panelists</h2>
<p>
<!-- {% include panelists.html %} -->
<b>To Be Announced</b>
</p>

<!-- Schedule -->
<h2 class="blackpar_title" id="schedule">Schedule</h2>
<p>
The workshop will feature a mix of invited talks, contributed paper presentations, interactive poster sessions, and a panel discussion to foster active participation and knowledge exchange. Following is the timetable:
{% include schedule.html %}
</p>

<!-- Organizers -->
<h2 class="blackpar_title" id="organizers">Organizers</h2>
<p>
<!-- {% include organizers.html %} -->
<b>To Be Announced</b>
</p>

<h2 class="blackpar_title" id="volunteers">Volunteers</h2>
<p>
<!-- {% include volunteers.html %} -->
<b>To Be Announced</b>
</p>

<!-- <br> -->

<!-- Technical Committee -->
<h2 class="blackpar_title" id="technical_committee">Technical Committee</h2>
<p>
<!-- {% include technical_committee.html %} -->
<b>To Be Announced</b>
</p>
<!-- <br> -->

<!-- <h2 class="blackpar_title">Diamond Sponsors</h2> -->
<!-- <center>
	<img src="/images/logos.png">	
	<img src="/images/BASF_logo.png">	
</center> -->



<!-- <h2 class="blackpar_title">Sponsors</h2>
<p>
We are currently welcoming sponsorship opportunities. If your organization is interested in supporting our conference, please contact us (neurips.ENLSP.2024@gmail.com) for more information on sponsorship packages and benefits. 
</p> -->

<!-- <h2 class="blackpar_title" id="sponsors"> Diamond Sponsors</h2> -->

<h2 class="blackpar_title" id="sponsors">Sponsors</h2>
<b>To Be Announced</b>
<!-- <br> -->
<div class="row">
	<!-- <div class="col">
		<center>
			<img src="/images/huawei_logo.png" width="500px">
		</center>
	</div> -->
	<!-- <div class="col">
		<center>
			<img src="/images/BASF_logo.png" width="350px">
		</center>
	</div>	 -->
</div>
<!-- <br> -->
<!-- <h2 class="blackpar_title">Platinum Sponsor</h2> -->
<!-- <div class="row">
	<div class="col">
		<center>
			<img src="/images/Apple-Logo.jpg" width="250px">
		</center>
	</div>
</div> -->
<!-- <h2 class="blackpar_title">Gold Sponsors</h2> -->
<!-- <br> -->
<!-- <div class="row">
	<div class="col">
		<center>
			<img src="/images/shanghai_ai_lab1.png" width="200px">
		</center>
	</div>
	<div class="col">
		<center>
			<img src="/images/Logo-Sanofi.png" width="150px">
		</center>
	</div>
</div> -->
<!-- <br> -->
<!-- <div class="row">
	<div class="col">
		<center>
			<img src="/images/netmind_logo.png" width="400px">
		</center>
	</div>
	<div class="col">
		<center>
			<img src="/images/CUHK.png" width="400px">
	</center>
</div> -->
<!-- <br> -->
