<div class="container quiz">
<div class="quiz-entry">
    <img src="<?php echo plugin_dir_url(__FILE__); ?>/img/header.png" alt="Quiz">
    <h2>
        Take this quiz to test your understanding of FMLA.
    </h2>
    <button class="btn btn-lg btn-primary" id="start">Start</button>
</div>

<div class="slide-container quiz-body" style="display: none;">
    <!-- progress-bar -->
    <div class="container">
        <ul id="progress-bar" class="progressbar">
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
     </div>

<div class="slide ques active" pos="1">
<h3><span class="number">1 &#8594;</span> <b>True or False</b>: The Family and Medical Leave Act (FMLA) applies only to private employers that have at least 50 employees, and not to public agencies or public and private schools.</h3>
<button class="btn-secondary slide-toggle" direction="next" onclick="ans(1,1)"><span>A</span>True</button> <br>
<button class="btn-secondary slide-toggle" direction="next" onclick="ans(1,2)"><span>B</span>False</button>
</div>

<div class="slide ans" pos="2" style="opacity:0">
    <h3>Correct answer is <b>False</b></h3>
    <button class="btn-primary slide-toggle" direction="next">Next</button>
</div>

<div class="slide ques" pos="3" style="opacity:0">
    <h3><span class="number">2 &#8594;</span> <b>True or False</b>: The Family and Medical Leave Act (FMLA) applies only to private employers that have at least 50 employees, and not to public agencies or public and private schools.</h3>
    
    <button class="btn-secondary slide-toggle" direction="next" onclick="ans(2,1)"><span>A</span>True</button> <br>
    <button class="btn-secondary slide-toggle" direction="next" onclick="ans(2,2)"><span>B</span>False</button>
</div>

<div class="slide ans" pos="4" style="opacity:0">
    <h3>Correct answer is <b>False</b></h3>
    <button class="btn-primary" id="submit">Submit</button>
</div>

<div class="icon">
        <button class="btn-primary slide-toggle" direction="prev" id="prev"><span class="dashicons dashicons-arrow-up-alt2"></span></button>
        <button class="btn-primary slide-toggle"  direction="next" id="next"><span class="dashicons dashicons-arrow-down-alt2"></span></button>
</div>
</div>

<div class="final-screen text-center" style="display: none;">
<h2>You got <span id="correct-ans"></span>/<span id="total-ques"></span> </h2>
<button class="btn-primary btn-lg">LEARN MORE</button>
</div>
</div>