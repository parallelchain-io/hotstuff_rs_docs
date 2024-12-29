(function() {
    var type_impls = Object.fromEntries([["hotstuff_rs",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BorshDeserialize-for-UpdateSet%3CK,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#21\">source</a><a href=\"#impl-BorshDeserialize-for-UpdateSet%3CK,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html\" title=\"struct hotstuff_rs::types::update_sets::UpdateSet\">UpdateSet</a>&lt;K, V&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;K, V&gt;: BorshDeserialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;K&gt;: BorshDeserialize,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.deserialize_reader\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#21\">source</a><a href=\"#method.deserialize_reader\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_reader</a>&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt;(reader: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize</a>(buf: &amp;mut &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Deserializes this instance from a given slice of bytes.\nUpdates the buffer to point at the remaining bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from_slice\" class=\"method trait-impl\"><a href=\"#method.try_from_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_from_slice</a>(v: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Deserialize this instance from a slice of bytes.</div></details><section id=\"method.try_from_reader\" class=\"method trait-impl\"><a href=\"#method.try_from_reader\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_from_reader</a>&lt;R&gt;(reader: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section></div></details>","BorshDeserialize","hotstuff_rs::types::update_sets::AppStateUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdatesBytes"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BorshSerialize-for-UpdateSet%3CK,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#21\">source</a><a href=\"#impl-BorshSerialize-for-UpdateSet%3CK,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; BorshSerialize for <a class=\"struct\" href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html\" title=\"struct hotstuff_rs::types::update_sets::UpdateSet\">UpdateSet</a>&lt;K, V&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;K, V&gt;: BorshSerialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;K&gt;: BorshSerialize,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#21\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize</a>&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt;(&amp;self, writer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut W</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_to_vec\" class=\"method trait-impl\"><a href=\"#method.try_to_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_to_vec</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Serialize this instance into a vector of bytes.</div></details></div></details>","BorshSerialize","hotstuff_rs::types::update_sets::AppStateUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdatesBytes"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-UpdateSet%3CK,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#21\">source</a><a href=\"#impl-Clone-for-UpdateSet%3CK,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html\" title=\"struct hotstuff_rs::types::update_sets::UpdateSet\">UpdateSet</a>&lt;K, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#21\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html\" title=\"struct hotstuff_rs::types::update_sets::UpdateSet\">UpdateSet</a>&lt;K, V&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotstuff_rs::types::update_sets::AppStateUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdatesBytes"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UpdateSet%3CK,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#30-80\">source</a><a href=\"#impl-UpdateSet%3CK,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"struct\" href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html\" title=\"struct hotstuff_rs::types::update_sets::UpdateSet\">UpdateSet</a>&lt;K, V&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#35-40\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <code>UpdateSet</code> with empty <code>inserts</code> and <code>deletes</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#46-49\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.insert\" class=\"fn\">insert</a>(&amp;mut self, key: K, value: V)</h4></section></summary><div class=\"docblock\"><p>Schedule the insertion of a <code>key</code>-<code>value</code> pair when the block that corresponds to this <code>UpdateSet</code>\ngets committed.</p>\n<p>This cancels the deletion of <code>key</code>, if it has been scheduled using <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#method.delete\" title=\"method hotstuff_rs::types::update_sets::UpdateSet::delete\"><code>delete</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.delete\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#54-57\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.delete\" class=\"fn\">delete</a>(&amp;mut self, key: K)</h4></section></summary><div class=\"docblock\"><p>Schedule the deletion of <code>key</code> when the block that corresponds to this <code>UpdateSet</code> gets committed.</p>\n<p>This cancels the insertion of <code>key</code>, if it has been scheduled using <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#method.insert\" title=\"method hotstuff_rs::types::update_sets::UpdateSet::insert\"><code>insert</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_insert\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#61-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.get_insert\" class=\"fn\">get_insert</a>(&amp;self, key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;K</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;V</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Get whether the <code>UpdateSet</code> is scheduled to insert a value to <code>key</code> when the block that corresponds\nto this <code>UpdateSet</code> gets committed, and if so, returns a reference to that value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains_delete\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#67-69\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.contains_delete\" class=\"fn\">contains_delete</a>(&amp;self, key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;K</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Check whether the <code>UpdateSet</code> is scheduled to delete <code>key</code> when the block that corresponds to this\n<code>UpdateSet</code> gets committed.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inserts\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#72-74\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.inserts\" class=\"fn\">inserts</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/collections/hash/map/struct.Iter.html\" title=\"struct std::collections::hash::map::Iter\">Iter</a>&lt;'_, K, V&gt;</h4></section></summary><div class=\"docblock\"><p>Get an iterator over all of the key-value pairs that this <code>UpdateSet</code> will insert.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deletes\" class=\"method\"><a class=\"src rightside\" href=\"src/hotstuff_rs/types/update_sets.rs.html#77-79\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html#tymethod.deletes\" class=\"fn\">deletes</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/std/collections/hash/set/struct.Iter.html\" title=\"struct std::collections::hash::set::Iter\">Iter</a>&lt;'_, K&gt;</h4></section></summary><div class=\"docblock\"><p>Get an iterator over all of the keys that this <code>UpdateSet</code> will delete.</p>\n</div></details></div></details>",0,"hotstuff_rs::types::update_sets::AppStateUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdates","hotstuff_rs::types::update_sets::ValidatorSetUpdatesBytes"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18353]}