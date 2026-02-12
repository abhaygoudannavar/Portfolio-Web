
import React from 'react';
import { Badge } from '@/components/ui/badge';

export const AI_Is_Not_Skynet = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Stop Panicking: AI Is Not Skynet, It’s Just a Better Stack Overflow
        </h1>
        <div className="flex gap-2 mb-6">
          <Badge variant="secondary">Opinion</Badge>
          <Badge variant="outline">AI</Badge>
          <Badge variant="outline">Career</Badge>
        </div>
      </div>

      <p className="lead text-lg text-gray-300">
        I am so tired of the doom-scrolling.
      </p>

      <p>
        Every time I open Twitter (or X, whatever we're calling it this week), it’s the same thing: 
        <em> "Devin is here. Engineers are cooked." "GPT-5 will replace junior devs." "Why learn to code when AI can do it for you?"</em>
      </p>

      <p>
        It’s exhausting. And honestly? It’s lazy thinking.
      </p>

      <p>
        I’ve been coding, breaking things, and fixing them again for a while now. And after actually using these tools—not just reading the breathless marketing hype—I have a very different take. AI isn’t coming for your job. But it is going to kill the version of the job you think you have.
      </p>

      <p>
        Here is the unfiltered truth about where we’re heading.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">The "Bricklayer" vs. The Architect</h2>
      
      <p>
        Let’s be real for a second. A lot of what we used to call "programming" was just grunt work.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Writing boilerplate code for a REST API? <strong>Boring.</strong></li>
        <li>Centering a div? <strong>A nightmare.</strong></li>
        <li>Googling the specific syntax for a library function I’ve used fifty times but still can’t remember? <strong>Waste of time.</strong></li>
      </ul>

      <p className="mt-4">
        If your entire value as a developer is that you have the syntax of Java memorized, then yeah, you should be worried. AI can do that faster than you. It doesn't get tired, and it doesn't make typos (well, mostly).
      </p>

      <p>
        But coding was never really about the syntax. It was about problem-solving.
      </p>

      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-gray-900/50 rounded-r">
        "AI is a power drill. Before power drills, people used hand screwdrivers. It took forever. The power drill didn't replace the carpenter; it just meant the carpenter could build a house in a week instead of a month."
      </blockquote>

      <h2 className="text-2xl font-semibold mt-8 mb-4">The Hard Truth: It’s Not the AI That Will Replace You</h2>

      <p>
        Here is the quote everyone uses, but it’s true: <strong>"AI won’t take your job. A human using AI will."</strong>
      </p>

      <p>
        I see it in my own workflow. I’m not "writing" less code, but I am thinking more. Instead of spending 3 hours figuring out how to set up the environment, I tell the AI to generate the config files, and I spend those 3 hours actually building the feature.
      </p>

      <p>
        If you are a developer who refuses to touch AI because it’s "cheating" or "not real coding," you are going to get left behind. Not by the robot, but by the junior dev sitting next to you who is using the robot to do 10x the work you are doing.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Moving Up the Ladder</h2>

      <p>
        The future isn't "no code." The future is "high-level code." We are moving up the abstraction ladder.
      </p>

      <div className="flex flex-col gap-2 my-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-gray-500">1.</span>
          <span>Binary (0s and 1s)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">2.</span>
          <span>Assembly</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">3.</span>
          <span>C/C++</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">4.</span>
          <span>Python/JS</span>
        </div>
        <div className="flex items-center gap-4 font-bold text-blue-400">
          <span className="text-gray-500">5.</span>
          <span>Natural Language (AI)</span>
        </div>
      </div>

      <p>
        AI is just the next layer of abstraction. We are becoming architects. Our job is shifting from "laying every single brick by hand" to "designing the blueprint and making sure the wall doesn't collapse." You still need to understand how the bricks work—if you don't, the AI will hallucinate a load-bearing wall made of paper, and you won’t know enough to stop it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">The "Filter" Part</h2>

      <p>
        Look, I’m not saying everything is going to be sunshine and rainbows.
      </p>

      <p>
        The job market will get harder for people who are mediocre. If you just went through a boot camp, learned to copy-paste React components, and don't understand how computers actually work? Yeah, you’re in trouble. The "code monkey" jobs are gone.
      </p>

      <p>
        But for the curious? For the people who actually want to build things? <strong>This is the best time in history to be alive.</strong> You have an infinite, tireless junior developer available 24/7 to help you build whatever is in your head.
      </p>

      <p className="mt-8 text-xl font-medium">
        So stop doom-scrolling. Close the "AI is taking over" threads. Go build something. The tools have changed, but the mission hasn't.
      </p>
    </article>
  );
};
