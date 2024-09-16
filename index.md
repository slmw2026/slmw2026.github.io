---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
---
<img src="/images/banner2024.png" style="pointer-events: none; user-select: none;">

<div style="
  border: 1px solid #ccc; 
  border-radius: 15px; 
  padding: 20px; 
  width: 980px; 
  background-color: #f9f9f9;">
  <h2 style="margin-top: -10px;">📰 <b>Latest Updates</b></h2>
    <ul>
    <span class="news-item-icon">📢</span> <b>NeurIPS Fast Track Submission Added – Deadline: September 30th, AOE
	</b><p>
    We have added a special fast track for papers reviewed at NeurIPS 2024 that were not accepted. Authors can submit their papers with a link to their (anonymous) OpenReview page, giving our program committee access to the reviews of their paper.
  	</p>
	<span class="news-item-icon">📢</span> Our Submission Portal will remain open until September 18th, AOE, for editing existing submitted papers. 
    <!-- Add more news items as needed -->
  </ul>
</div>


<p>
The fourth version of the Efficient Natural Language and Speech Processing (ENLSP-IV) workshop will focus on how to make large language and foundation models more efficient in terms of <b>Architecture</b>, <b>Training</b>, and <b>Inference</b> in their real-world applications. This year, following the trend of industry and academia, we put more emphasis on investigating new architectures to make future language and foundation models more efficient. Moreover, we highlight the importance of comprehensive evaluation and benchmarking new efficient models from different practical aspects. 
The workshop program offers an interactive platform for gathering experts and talents from academia and industry through invited talks, panel discussion, paper submission, reviews, interactive poster sessions, oral presentations and a couple of mentorship sessions for new researchers.
This will be a unique opportunity to discuss and share challenging problems, build connections,  exchange ideas and brainstorm, and foster future collaborations. The topics of this workshop can be of interest for people working on general machine learning, deep learning, hardware, optimization, theory and applications. 
</p>


<h2 class="blackpar_title" id="overview">Overview</h2>
<p>
As large language models (e.g. <a href="https://proceedings.neurips.cc/paper_files/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf">GPT-3</a>, <a href="http://arxiv.org/abs/2303.08774"> GPT-4</a>, <a href="https://llama.meta.com/llama3/"> Llama 3</a>, <a href="https://arxiv.org/pdf/2305.10403">PALM</a>, <a href="https://arxiv.org/pdf/2312.11805">Gemini</a>, and <a href="https://arxiv.org/pdf/2303.10845">Pangu-∑</a>), pre-trained speech models (e.g. <a href="https://arxiv.org/pdf/2202.05993">wav2vec</a>, <a href="https://arxiv.org/pdf/2106.07447">Hubert</a>, <a href="https://arxiv.org/pdf/2110.13900">wavLM</a>, <a href="https://proceedings.mlr.press/v202/radford23a/radford23a.pdf">Whisper</a>, <a href="https://www.assemblyai.com/blog/conformer-1/">Conformer-1</a> and <a href="https://www.assemblyai.com/blog/conformer-2/">Conformer-2</a> ) and other foundation models (e.g. <a href="https://openai.com/index/hello-gpt-4o/">GPT-4o</a>, and <a href="https://stability.ai/stable-image">Stable Diffusion</a>) have advanced rapidly and become more prominent and widespread, improving their efficiency would be more crucial. 
While it is true that the computational power and GPU resources have played a significant role in the success of these models, we need to also be aware that using more computational resources can result in: (a) increasing the cost of training and deploying such models, (b) making the models less accessible, (c) less contribution from the research community, and (d) increasing the environmental costs of the models. Moreover, it is evident that most of these pre-trained models are largely over-parameterized and their efficiency is under question. Lack of efficiency can largely limit the application of these advanced models in practice.</p>
<!-- Pangu-&sum; -->
<p>
Building upon the framework of our previous three editions, this workshop remains dedicated to investigating solutions for enhancing the efficiency of pre-trained language and foundation models but with introducing some fresh and important new topics to the community and encouraging their contributions.
Just to highlight a few: <b>(1)</b> Despite the ubiquitous usage of Transformers, they suffer from quadratic computational complexity which limits their efficiency especially for longer sequence lengths. Should we improve the efficiency of Transformers (e.g. in <a href="https://openreview.net/forum?id=4g02l2N2Nx">Hedgehog</a>, <a href="http://arxiv.org/abs/2312.06635">Gated Linear Attention</a>) or look for other architectures (e.g. <a href="https://arxiv.org/abs/2312.00752">Mamba</a>, <a href="http://arxiv.org/abs/2403.19887">Jamba</a>, <a href="http://arxiv.org/abs/2305.13048">RVKW</a>, <a href="http://arxiv.org/abs/2405.04517">xLSTM</a>, and <a href="http://arxiv.org/abs/2111.00396">SSMs</a>)? <b>(2)</b> For accelerating training, we have seen the significant impact of designing hardware efficient implementations such as in <a href = "http://arxiv.org/abs/2205.14135">Flash Attention</a>. Should we focus more on these hardware-aware solutions or more on new/improved architectures?
<b>(3)</b> For efficient inference, there are solutions such as: Speculative Decoding <a href="http://arxiv.org/abs/2302.01318">[Link1]</a> <a href="http://arxiv.org/abs/2211.17192">[Link2]</a> where the performance is strongly model and task-dependent and the draft and target models should have the same vocabulary (tokenizer); improved KV-caching (e.g. <a href="http://arxiv.org/abs/2306.14048">[Link]</a>) which has a limited speed-up; and many-in-one models such as <a href="http://arxiv.org/abs/2309.00255">SortedNet</a>, <a href="http://arxiv.org/abs/2310.07707">MatFormer</a>, and <a href="http://arxiv.org/abs/2404.16710">LayerSkip</a> but the performance of sub-models drops compared to their corresponding individual models.
<b>(4)</b> While there are many so-called efficient solutions in the literature, there is no fair, comprehensive and practical evaluation of these models and their comparison to each other. For example, we do not know the hallucination extent of the new architectures vs. the transformer model (e.g. in <a href="http://arxiv.org/abs/2402.01032">[Link]</a>). 
</p>

<!-- Call for Papers -->
<h2 class="blackpar_title" id="call_for_papers">Call for Papers</h2>
<p>
Investing in the future of language and foundation models requires a concrete effort to enhance their efficiency across multiple dimensions (including architecture, training, and inference) and having a comprehensive evaluation framework. 
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
</ul>

</p>

<h2 class="blackpar_title">Submission Instructions</h2>
<p>
You are invited to submit your papers in our CMT submission portal <a href="https://cmt3.research.microsoft.com/ENLSP2024">(Link)</a>. All the submitted papers have to be anonymous for double-blind review. We expect each paper will be reviewed by at least three reviewers. The content of the paper (excluding the references and supplementary materials) should not be more than <b>8 pages for Long Papers</b> and <b>4 pages for Short Papers</b>, strictly following the NeurIPS template style <a href= "https://www.overleaf.com/latex/templates/neurips-2024/tpsbbrdqcmsh">(Link)</a>. Please be advised that the NeurIPS submission checklist is not needed for our workshop submissions. 
<br />
Authors can submit up to 100 MB of supplementary materials separately. Authors are highly encouraged to submit their codes for reproducibility purposes. According to the guideline of the NeurIPS workshops, already published papers are not encouraged for submission, but you are allowed to submit your ArXiv papers or the ones which are under submission (for example <b> any NeurIPS submissions can be submitted concurrently to workshops </b>). Moreover, a work that is presented at the main NeurIPS conference should not appear in a workshop. Please make sure to indicate the complete list of conflict of interests for all the authors of your paper. To encourage higher quality submissions, our sponsors are offering the <b>Best Paper</b> and the <b>Best Poster</b> Awards to qualified outstanding original oral and poster presentations (upon nomination of the reviewers). Bear in mind that our workshop is not archival, but the accepted papers will be hosted on the workshop website. Moreover, we are currently negotiating with a publisher to host opt-in accepted papers in a special issue proceeding for our workshop.
</p>

<h2 class="blackpar_title">Important Dates:</h2>
<p>
<ul>
	<li>Special NeurIPS Fast Track Submission Deadline: <b>September 30, 2024 Anywhere on Earth (AOE)</b> </li>
	<li><s>Submission Deadline: September 15, 2024 Anywhere on Earth (AOE)</s> </li>
	<li>Acceptance Notification: <b>October 09, 2024 AOE</b> </li>
	<li>Camera-Ready Submission: <b>October 28, 2024 AOE</b> </li>
	<li>Workshop Date: <b>December 14, 2024 </b></li>
</ul>
</p>


<!--Confirmed Speakers-->
<h2 class="blackpar_title" id="speakers">Keynote Speakers</h2>
<p>
{% include speakers.html %}
</p>

<h2 class="blackpar_title" id="speakers">Panelists</h2>
<p>
{% include panelists.html %}
</p>

<!-- Schedule -->
<h2 class="blackpar_title" id="schedule">Tentative Schedule</h2>
<p>
{% include schedule.html %}
</p>

<!-- Organizers -->
<h2 class="blackpar_title" id="organizers">Organizers</h2>
<p>
{% include organizers.html %}
</p>

<h2 class="blackpar_title" id="Organizers">Volunteers</h2>
<p>
{% include volunteers.html %}
</p>
<!-- <div class="row_perso">
	<div class="card_perso column_perso justify-content-center" id="volunteer_card">
	  <img src="/images/khalil_bibi.png" alt="Khalil Bibi" class="img_card_perso">
	  <div class="container_perso" >
		<center>
		<h6>
			<b>Khalil Bibi</b>
			<br>
			Huawei Noah's Ark Lab
			<br>
			<a href="https://scholar.google.ca/citations?user=feQAvxoAAAAJ&hl=en">
				<i class="bi bi-mortarboard-fill" style="font-size: 2rem;"></i>
			</a>
			&nbsp;
			<a href="https://www.linkedin.com/in/khalilbibi/">
				<i class="bi bi-linkedin" style="font-size: 2rem;"></i>
			</a>
		</h6>
		</center>
	  </div>
	</div>
	<div class="card_perso column_perso justify-content-center" id="volunteer_card">
	  <img src="/images/dav.jpg" alt="Khalil Bibi" class="img_card_perso">
	  <div class="container_perso" >
		<center>
		<h6>
			<b>David Alfonso-Hermelo</b>
			<br>
			Huawei Noah's Ark Lab
			<br>
			<a href="https://scholar.google.ca/citations?user=g6GccGAAAAAJ&hl=en&oi=ao">
				<i class="da da-mortarboard-fill" style="font-size: 2rem;"></i>
			</a>
			&nbsp;
			<a href="https://www.linkedin.com/in/david-alfonso-hermelo-6646a1b1/">
				<i class="bi bi-linkedin" style="font-size: 2rem;"></i>
			</a>
		</h6>
		</center>
	  </div>
	</div>
</div> -->


<br> 

<!-- Technical Committee -->
<h2 class="blackpar_title" id="technical_committee">Technical Committee</h2>
<p>
{% include technical_committee.html %}
</p>
<br>

<!-- <h2 class="blackpar_title">Diamond Sponsors</h2> -->
<!-- <center>
	<img src="/images/logos.png">	
	<img src="/images/BASF_logo.png">	
</center> -->



<!-- <h2 class="blackpar_title">Sponsors</h2>
<p>
We are currently welcoming sponsorship opportunities. If your organization is interested in supporting our conference, please contact us (neurips.ENLSP.2024@gmail.com) for more information on sponsorship packages and benefits. 
</p> -->

<h2 class="blackpar_title" id="sponsors"> Diamond Sponsors</h2>
<br>
<div class="row">
	<div class="col">
		<center>
			<img src="/images/Diamond.png" width="800px">
		</center>
	</div>
	<!-- <div class="col">
		<center>
			<img src="/images/BASF_logo.png" width="350px">
		</center>
	</div>	 -->
</div>
<br>
<h2 class="blackpar_title">Platinum Sponsor</h2>
<div class="row">
	<div class="col">
		<center>
			<img src="/images/Apple-Logo.jpg" width="250px">
		</center>
	</div>
</div>
<h2 class="blackpar_title">Gold Sponsors</h2>
<br>
<div class="row">
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
</div>
<br>
<div class="row">
	<div class="col">
		<center>
			<img src="/images/netmind_logo.png" width="400px">
		</center>
	</div>
</div>
