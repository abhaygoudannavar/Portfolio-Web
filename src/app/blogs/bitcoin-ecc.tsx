
import React from 'react';
import { Badge } from '@/components/ui/badge';

export const Bitcoin_ECC = () => {
    return (
        <article className="prose prose-invert max-w-none">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-600 bg-clip-text text-transparent">
                    I Finally Get It: The Weird Math Behind Bitcoin’s Keys (ECC & secp256k1)
                </h1>
                <div className="flex gap-2 mb-6">
                    <Badge variant="secondary">Tech Deep Dive</Badge>
                    <Badge variant="outline">Crypto</Badge>
                    <Badge variant="outline">Math</Badge>
                </div>
            </div>

            <p className="lead text-lg text-gray-300">
                For the longest time, "cryptography" to me just meant "complicated math that smart people do."
            </p>

            <p>
                I knew Bitcoin used public and private keys, and I knew that if I lost my private key, my coins were gone. But I didn't actually know <em>why</em>.
            </p>

            <p>
                I’ve been using libraries like <code>bitcoin-cli</code> or <code>bdk</code> for a while now, treating them like magic black boxes. But recently, I hit a wall where "magic" wasn't good enough. I needed to know what was happening under the hood. So, I decided to write this down—mostly to prove to myself that I actually understand it (and so I don't forget it in six months).
            </p>

            <p>
                Specifically, I went down the rabbit hole of Elliptic Curve Cryptography (ECC) and the specific curve Bitcoin uses: <strong>secp256k1</strong>.
            </p>

            <p>
                Here is what I found—and honestly, it’s closer to geometry class than the scary calculus I was expecting.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The Curve That Isn't an Ellipse</h2>

            <p>
                First off, the name is a lie. Elliptic curves don't look like ellipses. They actually look like a weird, symmetrical bulge with lines shooting off to infinity.
            </p>

            <p>
                The specific curve Bitcoin uses is defined by this deceptively simple equation:
            </p>

            <div className="my-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center font-mono text-xl text-blue-400">
                y² = x³ + 7
            </div>

            <p>
                That's it. No long coefficients, no massive polynomials. Just $x$ cubed plus 7. If you plot this over real numbers, it looks smooth. But computers don't handle "smooth" well (floating point errors are a nightmare for security), so Bitcoin solves this equation over a <strong>finite field</strong> (basically, using modulo arithmetic with a massive prime number).
            </p>

            <p>
                Instead of a smooth line, the curve becomes a scattered cloud of points on a grid. But the math still works the same.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The "Billiards" Game (Point Addition)</h2>

            <p>
                This was my biggest "click" moment. How do we get numbers out of a curve? We play a game of connect-the-dots.
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                <li>Imagine the curve is a pool table.</li>
                <li>Pick two points on the curve, let's call them A and B.</li>
                <li>Draw a line through them.</li>
                <li>That line will hit the curve at exactly one other place (Point C).</li>
                <li>Reflect Point C across the x-axis to get your final point.</li>
            </ol>

            <p className="mt-4">
                In ECC math, we say <strong>A + B = Final Point</strong>.
            </p>

            <p>
                This "addition" is the building block of everything. If you start with a point G (the Generator Point) and add it to itself over and over again—say, $k$ times—you end up at a new point P.
            </p>

            <div className="my-4 text-center font-mono text-lg text-green-400">
                P = k × G
            </div>

            <p>Here is the magic:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>k</strong> is your <strong>Private Key</strong> (just a random large number).</li>
                <li><strong>G</strong> is a known constant (everyone uses the same starting point).</li>
                <li><strong>P</strong> is your <strong>Public Key</strong> (the coordinate you land on).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The Trapdoor: Why You Can't Go Back</h2>

            <p>
                This is where the security comes in. If I tell you the starting point $G$ and the final landing spot $P$, you cannot figure out how many times I "hit the ball" ($k$) to get there.
            </p>

            <p>
                You would have to brute-force it, hopping point by point, which would take more energy than exists in the universe. This is called the <strong>Discrete Logarithm Problem</strong>. It’s the lock that secures every satoshi on the network.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why secp256k1? (The "Satoshi" Choice)</h2>

            <p>
                Most of the internet (HTTPS, TLS) uses NIST curves like P-256. Bitcoin uses secp256k1. Why?
            </p>

            <p>
                For years, people speculated that Satoshi chose it because it was obscure. The NIST curves were generated with "random" coefficients provided by the NSA. Many cryptographers (including the Bitcoin community) suspect those coefficients might contain a backdoor that allows the NSA to crack the keys.
            </p>

            <p>
                secp256k1 is a Koblitz curve. Its constants are derived in a predictable, transparent way (remember that $y^2 = x^3 + 7$?). There is no room to hide a backdoor in a 7.
            </p>

            <p>
                Plus, it turns out Koblitz curves are actually faster to compute, which was a nice bonus for early Bitcoin mining.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Getting My Hands Dirty (Python)</h2>

            <p>
                I couldn't write this without trying to implement a tiny piece of it. I didn't want to use a library that hides the math, so here is a raw snippet to visualize how the modular arithmetic works (don't use this for real money, obviously!):
            </p>

            <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 my-6 overflow-x-auto text-sm">
                <pre className="text-gray-300 font-mono">
{`# The constants for secp256k1
P = 2**256 - 2**32 - 977 # The prime field
Gx = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798
Gy = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8

# A very basic "double and add" function for elliptic curves
# (This is the math behind P = k * G)
def point_add(p1, p2):
    if p1 is None: return p2
    if p2 is None: return p1
    
    (x1, y1), (x2, y2) = p1, p2
    
    if x1 == x2 and y1 != y2:
        return None # Point at infinity
    
    if x1 == x2:
        m = (3 * x1 * x1) * pow(2 * y1, P - 2, P)
    else:
        m = (y1 - y2) * pow(x1 - x2, P - 2, P)
        
    x3 = (m * m - x1 - x2) % P
    y3 = (m * (x1 - x3) - y1) % P
    
    return (x3, y3)

# My "Private Key" (shhh)
k = 123456789 

# Generating the Public Key
public_point = (Gx, Gy)
for i in range(k - 1):
    public_point = point_add(public_point, (Gx, Gy))

print(f"My Public Key Point: {public_point}")`}
                </pre>
            </div>

            <p>
                Running this script made the concept real for me. The public key isn't just a random string; it's a coordinate on a massive, invisible grid.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What's Next?</h2>

            <p>
                Understanding this has changed how I read BIPs (Bitcoin Improvement Proposals). When I read about Schnorr Signatures (BIP-340), I now understand that they are just a linear combination of these points, which allows for really cool things like multi-sig aggregation.
            </p>

            <p className="mt-4 text-gray-400 italic">
                If you spot any errors in my math, let me know—I’m still learning this stuff myself.
            </p>
        </article>
    );
};
