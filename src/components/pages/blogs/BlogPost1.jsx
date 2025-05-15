// BlogPost1.jsx
export const BlogPost1 = () => {
    return (
      <article className="blog-post">
        <h2 className="text-2xl font-bold mb-4">My 270 experience! Spring 2025</h2>
        <div className="prose max-w-none">
        <p className="mb-4">
          This school year has taught me a lot of life lessons both academically and mentally, but I won't dive deep into my mental growth in this blog (Maybe I will reivew some of books I read this year and talk about it). Instead, I want to talk about my experience in CSCI 270, which is where I feel like I learned the most during my time in school.
        </p>
        
        <p className="mb-4">
          The class is structured so that we learn dynamic programming first, then greedy algorithms, divide and conquer, network flow, P/NP, and finally a bit about theory of computation (though we didn't cover that last one very much).
        </p>
        
        <p className="mb-4">
          First, dynamic programming. I feel like I have a long history with dynamic programming going back to freshman year. I came to USC with absolutely no previous coding knowledge and spent a lot of time self-studying DSA and LeetCode to improve. However, learning dynamic programming seemed nearly impossible as I couldn't understand the mechanism despite watching countless explanation videos. Things finally clicked when Professor Cote walked through his thought process for solving these problems. Here's my interpretation (and if it's wrong, XD):
        </p>
        
        <ul className="list-disc pl-8 mb-4">
          <li>Byte-Size decision: What needs to be done?</li>
          <li>Recurrence relationship: How should you traverse through the problem?</li>
          <li>Base case: Pretty straightforward</li>
          <li>Now convert the recursive formula into a table and find its iteration pattern</li>
          <li>Maybe optimize the space if possible</li>
        </ul>

        <p className="mb-4">
          The second algorithm we learned was the greedy approach. Greedy felt intuitive and mainly used proof by induction. However, this one caught me off guard several times on the midterm. Although I understood the concepts, I couldn't explain my ideas clearly and often made at least one of the four common mistakes Professor warned us about. It might seem like wordplay to prove a greedy algorithm works, but being able to explain your reasoning clearly matters in the real world.
        </p>

        <p className="mb-4">
          Divide and conquer is another algorithm we've actually been learning since freshman year, but not by that name. We usually know it as binary search and merge sort. It's a pretty common algorithm that shows up everywhere and can be used in many situations. Back in the day, programmers often used divide and conquer to make their programs faster. We saw some cool examples in class, like using 2D grouping to find the closest points.
        </p>

        <p className="mb-4">
          Network flow was interesting, but I feel like this topic was stepping stone to P.NP.
        </p>

        <p className="mb-4">
          HEHEHE I personally found P/NP the most interesting topic of all and I truly enjoyed thinking about how to reduce problems to prove they're NP-Complete. Working on P/NP problems gives you a chance to think outside the box to make things work. This kind of algorithm really draws my attention and is one of the main reasons I wanted to study computer science—not for the money, but for these mind-boggling problems I wouldn't think about otherwise.
        </p>

        <p className="mb-4">
          Theory of computation felt like just a small introduction to what might come in CSCI 475. I promised myself I'd avoid that class to spare myself the suffering, but now I'm reconsidering since I enjoyed the P/NP questions so much.
        </p>
        </div>
      </article>
    );
  };