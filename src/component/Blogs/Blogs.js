import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="contex">
                <h1>Contex API</h1>
                <p>
                    কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট স্ট্রাকচার যা অনন্য বিবরণ আদান-প্রদান করতে সক্ষম করে এবং আপনার অ্যাপ্লিকেশনের সমস্ত স্তর থেকে প্রপ-ড্রিলিং সমাধানে সহায়তা করে।
                    স্টেটকে স্ট্যাকের সর্বোচ্চ প্যারেন্ট কম্পোনেন্ট দ্বারা রাখা উচিত যার জন্য রাজ্যে অ্যাক্সেস প্রয়োজন। ব্যাখ্যা করার জন্য, আমাদের অনেক নেস্টেড উপাদান রয়েছে। স্ট্যাকের উপরের এবং নীচের উপাদানটির রাজ্যে অ্যাক্সেস প্রয়োজন। প্রসঙ্গ ছাড়াই এটি করতে, আমাদের প্রতিটি নেস্টেড উপাদানের মাধ্যমে "প্রপস" হিসাবে রাজ্যটি পাস করতে হবে। একে বলা হয় "প্রপ ড্রিলিং"।
                </p>
                <p>
                    কনটেক্সট API ম্যানুয়ালি প্রপসের মাধ্যমে ডেটা পাস না করে একাধিক উপাদানের সাথে ডেটা ভাগ করতে ব্যবহার করা যেতে পারে। উদাহরণস্বরূপ, কিছু ব্যবহারের ক্ষেত্রে প্রসঙ্গ API এর জন্য আদর্শ: থিমিং, ব্যবহারকারীর ভাষা, প্রমাণীকরণ ইত্যাদি।
                </p>
            </div>
            <div className='tag'>
                <h1>What is a semantic tag?</h1>
                <p>
                    Semantic এইচটিএমএল উপাদানগুলি এমন যেগুলি মানুষের এবং মেশিন-পাঠযোগ্য উপায়ে তাদের অর্থ স্পষ্টভাবে বর্ণনা করে। header  , footer  এবং article -এর মতো উপাদানগুলিকে সবকটি শব্দার্থিক বলে মনে করা হয় কারণ তারা উপাদানটির উদ্দেশ্য এবং তাদের ভিতরে থাকা বিষয়বস্তুর ধরন সঠিকভাবে বর্ণনা করে।
                </p><p>
                    এটি এটিকে একটি শীর্ষ স্তরের শিরোনামের মতো দেখাবে, তবে এটির কোনও শব্দার্থিক মান নেই, তাই উপরে বর্ণিত হিসাবে এটি কোনও অতিরিক্ত সুবিধা পাবে না। তাই সঠিক কাজের জন্য সঠিক HTML এলিমেন্ট ব্যবহার করা ভালো ধারণা। এইচটিএমএলকে সেই ডেটার প্রতিনিধিত্ব করতে কোড করা উচিত যা পপুলেট করা হবে এবং এটির ডিফল্ট উপস্থাপনা স্টাইলের উপর ভিত্তি করে নয়। উপস্থাপনা (এটি কেমন হওয়া উচিত), সিএসএসের একমাত্র দায়িত্ব।
                </p>
                <p>
                    পৃষ্ঠার অনুসন্ধান র‌্যাঙ্কিংকে প্রভাবিত করার জন্য অনুসন্ধান ইঞ্জিনগুলি এর বিষয়বস্তুগুলিকে গুরুত্বপূর্ণ কীওয়ার্ড হিসাবে বিবেচনা করবে (এসইও দেখুন) স্ক্রীন রিডাররা এটিকে একটি সাইনপোস্ট হিসাবে ব্যবহার করতে পারে যাতে দৃষ্টি প্রতিবন্ধী ব্যবহারকারীরা একটি পৃষ্ঠা নেভিগেট করতে পারে৷ অর্থপূর্ণ কোডের ব্লকগুলি সন্ধান করা শব্দার্থিক বা নামস্থানীয় ক্লাস সহ বা ছাড়া অন্তহীন ডিভগুলির মাধ্যমে অনুসন্ধান করার চেয়ে উল্লেখযোগ্যভাবে সহজ ডেভেলপারকে পরামর্শ দেয় যে ধরনের ডেটা জনবহুল হবে শব্দার্থিক নামকরণ সঠিক কাস্টম উপাদান/উপাদানের নামকরণ আয়না করে
                </p>
            </div>
            <div className='inline'>
                <table>
                    <tr>
                        <th><h1>Inline Elements</h1></th>
                        <th><h1>Block-level Elements</h1></th>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                একটি ইনলাইন উপাদান একটি নতুন লাইন শুরু হয় না. একটি ইনলাইন উপাদান শুধুমাত্র প্রয়োজনীয় যতটা প্রস্থ নেয়। এটি একটি অনুচ্ছেদের ভিতরে একটি span উপাদান।
                            </p>
                        </td>
                        <td>
                            <p>
                                ব্লক-স্তরের উপাদান একটি ব্লক-স্তরের উপাদান সর্বদা একটি নতুন লাইনে শুরু হয় এবং ব্রাউজারগুলি স্বয়ংক্রিয়ভাবে উপাদানের আগে এবং পরে কিছু স্থান (একটি মার্জিন) যোগ করে। একটি ব্লক-স্তরের উপাদান সর্বদা উপলব্ধ সম্পূর্ণ প্রস্থ গ্রহণ করে (যতদূর সম্ভব বাম এবং ডানে প্রসারিত হয়)। দুটি সাধারণভাবে ব্যবহৃত ব্লক উপাদান হল: p এবং div ,p উপাদানটি একটি HTML নথিতে একটি অনুচ্ছেদ সংজ্ঞায়িত করে। div উপাদানটি একটি HTML নথিতে একটি বিভাগ বা একটি বিভাগকে সংজ্ঞায়িত করে।
                            </p>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <p>Examples of inline elements:</p>

                            <ul>
                                <li><code>&lt;a&gt;</code></li>
                                <li><code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;q&gt;, &lt;mark&gt;</code></li>
                                <li><code>&lt;span&gt;</code></li>
                            </ul>

                        </td>
                        <td>
                            <p>Examples of block level elements:</p>

                            <ul>
                                <li><code>&lt;p&gt;</code></li>
                                <li><code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;dl&gt;</code></li>
                                <li>All headings</li>
                                <li><code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;div&gt;</code></li>
                            </ul>
                        </td>
                    </tr>
                </table>


            </div>
        </div>
    );
};

export default Blogs;