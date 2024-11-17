<div class="prose dark:prose-invert">
	<h1>PageRank and HITS</h1>
	<div id="pagerank">
		<h2>PageRank Algorithm Example</h2>
		<p>
			Consider a small web of four pages: A, B, C, and D. The links between the pages are as
			follows:
		</p>
		<ul>
			<li>A links to B and C</li>
			<li>B links to C</li>
			<li>C links to A</li>
			<li>D links to C</li>
		</ul>
		<p>We can represent the link structure as a matrix M:</p>
		<pre>
    M = [
        [0, 0, 1, 0],  // A
        [1/2, 0, 0, 0],  // B
        [1/2, 1, 0, 1],  // C
        [0, 0, 0, 0]   // D
    ]
    </pre>
		<p>
			Assuming a damping factor of 0.85, the PageRank vector R can be calculated iteratively.
			Starting with an initial rank vector R0:
		</p>
		<pre>
    R0 = [1, 1, 1, 1]
    </pre>
		<p>After the first iteration, the new rank vector R1 is:</p>
		<pre>
    R1 = 0.85 * M * R0 + 0.15 * [1, 1, 1, 1]
    </pre>
		<p>Continue iterating until the rank vector converges to a stable value.</p>
	</div>

	<div id="hits">
		<h2>HITS Algorithm Example</h2>
		<p>
			Using the same web of four pages: A, B, C, and D, we can also apply the HITS algorithm. The
			links between the pages remain:
		</p>
		<ul>
			<li>A links to B and C</li>
			<li>B links to C</li>
			<li>C links to A</li>
			<li>D links to C</li>
		</ul>
		<p>
			In the HITS algorithm, each page has an authority score and a hub score. Initially, we start
			with equal scores:
		</p>
		<pre>
    Authority = [1, 1, 1, 1]
    Hub = [1, 1, 1, 1]
    </pre>
		<p>During each iteration, update the authority and hub scores:</p>
		<pre>
    Authority = M^T * Hub
    Hub = M * Authority
    </pre>
		<p>
			Normalize the scores after each iteration and continue until they converge to stable values.
		</p>
	</div>
</div>
