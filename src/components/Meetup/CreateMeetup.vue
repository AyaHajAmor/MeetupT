<template>
  <div id="main" class="wrapper style1">
					<div class="container">
                        <header class="major">
							<h2>Right Sidebar</h2>
						</header>
						<!-- Form -->
							<section>
								<form method="post" action="#">
									<div class="row gtr-uniform gtr-50">
										<div class="col-6 col-12-xsmall">
											<input type="text" name="name" id="name" value="" placeholder="Name" />
										</div>
										<div class="col-6 col-12-xsmall">
											<input type="email" name="email" id="email" value="" placeholder="Email" />
										</div>
										<div class="col-12">
											<select name="category" id="category">
												<option value="">- Category -</option>
												<option value="1">Manufacturing</option>
												<option value="1">Shipping</option>
												<option value="1">Administration</option>
												<option value="1">Human Resources</option>
											</select>
										</div>
										<div class="col-4 col-12-medium">
											<input type="radio" id="priority-low" name="priority" checked>
											<label for="priority-low">Low Priority</label>
										</div>
										<div class="col-4 col-12-medium">
											<input type="radio" id="priority-normal" name="priority">
											<label for="priority-normal">Normal Priority</label>
										</div>
										<div class="col-4 col-12-medium">
											<input type="radio" id="priority-high" name="priority">
											<label for="priority-high">High Priority</label>
										</div>
										<div class="col-6 col-12-medium">
											<input type="checkbox" id="copy" name="copy">
											<label for="copy">Email me a copy of this message</label>
										</div>
										<div class="col-6 col-12-medium">
											<input type="checkbox" id="human" name="human" checked>
											<label for="human">I am a human and not a robot</label>
										</div>
										<div class="col-12">
											<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="Send Message" class="primary" /></li>
												<li><input type="reset" value="Reset" /></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
					</div>
				</div>

</template>

<script>
export default {
 name :'CreateMeetup' ,
}
</script>

<style>

</style>