(function() {
    var implementors = Object.fromEntries([["hotstuff_rs",[["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/block_sync/messages/enum.BlockSyncAdvertiseMessage.html\" title=\"enum hotstuff_rs::block_sync::messages::BlockSyncAdvertiseMessage\">BlockSyncAdvertiseMessage</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.AdvertiseBlock.html\" title=\"struct hotstuff_rs::block_sync::messages::AdvertiseBlock\">AdvertiseBlock</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.AdvertisePC.html\" title=\"struct hotstuff_rs::block_sync::messages::AdvertisePC\">AdvertisePC</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/block_sync/messages/enum.BlockSyncMessage.html\" title=\"enum hotstuff_rs::block_sync::messages::BlockSyncMessage\">BlockSyncMessage</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.BlockSyncRequest.html\" title=\"struct hotstuff_rs::block_sync::messages::BlockSyncRequest\">BlockSyncRequest</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.BlockSyncResponse.html\" title=\"struct hotstuff_rs::block_sync::messages::BlockSyncResponse\">BlockSyncResponse</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/hotstuff/messages/enum.HotStuffMessage.html\" title=\"enum hotstuff_rs::hotstuff::messages::HotStuffMessage\">HotStuffMessage</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.Proposal.html\" title=\"struct hotstuff_rs::hotstuff::messages::Proposal\">Proposal</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.Nudge.html\" title=\"struct hotstuff_rs::hotstuff::messages::Nudge\">Nudge</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.PhaseVote.html\" title=\"struct hotstuff_rs::hotstuff::messages::PhaseVote\">PhaseVote</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.NewView.html\" title=\"struct hotstuff_rs::hotstuff::messages::NewView\">NewView</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/hotstuff/types/enum.Phase.html\" title=\"enum hotstuff_rs::hotstuff::types::Phase\">Phase</a>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/networking/messages/enum.Message.html\" title=\"enum hotstuff_rs::networking::messages::Message\">Message</a><div class=\"where\">where\n    <a class=\"enum\" href=\"hotstuff_rs/networking/messages/enum.ProgressMessage.html\" title=\"enum hotstuff_rs::networking::messages::ProgressMessage\">ProgressMessage</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"hotstuff_rs/block_sync/messages/enum.BlockSyncMessage.html\" title=\"enum hotstuff_rs::block_sync::messages::BlockSyncMessage\">BlockSyncMessage</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/networking/messages/enum.ProgressMessage.html\" title=\"enum hotstuff_rs::networking::messages::ProgressMessage\">ProgressMessage</a><div class=\"where\">where\n    <a class=\"enum\" href=\"hotstuff_rs/hotstuff/messages/enum.HotStuffMessage.html\" title=\"enum hotstuff_rs::hotstuff::messages::HotStuffMessage\">HotStuffMessage</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"hotstuff_rs/pacemaker/messages/enum.PacemakerMessage.html\" title=\"enum hotstuff_rs::pacemaker::messages::PacemakerMessage\">PacemakerMessage</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"hotstuff_rs/block_sync/messages/enum.BlockSyncAdvertiseMessage.html\" title=\"enum hotstuff_rs::block_sync::messages::BlockSyncAdvertiseMessage\">BlockSyncAdvertiseMessage</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/pacemaker/messages/enum.PacemakerMessage.html\" title=\"enum hotstuff_rs::pacemaker::messages::PacemakerMessage\">PacemakerMessage</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/pacemaker/messages/struct.TimeoutVote.html\" title=\"struct hotstuff_rs::pacemaker::messages::TimeoutVote\">TimeoutVote</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/pacemaker/messages/struct.AdvanceView.html\" title=\"struct hotstuff_rs::pacemaker::messages::AdvanceView\">AdvanceView</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/pacemaker/messages/enum.ProgressCertificate.html\" title=\"enum hotstuff_rs::pacemaker::messages::ProgressCertificate\">ProgressCertificate</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/pacemaker/types/struct.TimeoutCertificate.html\" title=\"struct hotstuff_rs::pacemaker::types::TimeoutCertificate\">TimeoutCertificate</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"enum\" href=\"hotstuff_rs/types/validator_set/enum.ValidatorSetUpdatesStatusBytes.html\" title=\"enum hotstuff_rs::types::validator_set::ValidatorSetUpdatesStatusBytes\">ValidatorSetUpdatesStatusBytes</a><div class=\"where\">where\n    <a class=\"type\" href=\"hotstuff_rs/types/update_sets/type.ValidatorSetUpdatesBytes.html\" title=\"type hotstuff_rs::types::update_sets::ValidatorSetUpdatesBytes\">ValidatorSetUpdatesBytes</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.AdvertiseBlock.html\" title=\"struct hotstuff_rs::block_sync::messages::AdvertiseBlock\">AdvertiseBlock</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.BlockHeight.html\" title=\"struct hotstuff_rs::types::data_types::BlockHeight\">BlockHeight</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureBytes.html\" title=\"struct hotstuff_rs::types::data_types::SignatureBytes\">SignatureBytes</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.AdvertisePC.html\" title=\"struct hotstuff_rs::block_sync::messages::AdvertisePC\">AdvertisePC</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.BlockSyncRequest.html\" title=\"struct hotstuff_rs::block_sync::messages::BlockSyncRequest\">BlockSyncRequest</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.BlockHeight.html\" title=\"struct hotstuff_rs::types::data_types::BlockHeight\">BlockHeight</a>: BorshDeserialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u32.html\">u32</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/block_sync/messages/struct.BlockSyncResponse.html\" title=\"struct hotstuff_rs::block_sync::messages::BlockSyncResponse\">BlockSyncResponse</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"hotstuff_rs/types/block/struct.Block.html\" title=\"struct hotstuff_rs::types::block::Block\">Block</a>&gt;: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.NewView.html\" title=\"struct hotstuff_rs::hotstuff::messages::NewView\">NewView</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.Nudge.html\" title=\"struct hotstuff_rs::hotstuff::messages::Nudge\">Nudge</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.PhaseVote.html\" title=\"struct hotstuff_rs::hotstuff::messages::PhaseVote\">PhaseVote</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.CryptoHash.html\" title=\"struct hotstuff_rs::types::data_types::CryptoHash\">CryptoHash</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"hotstuff_rs/hotstuff/types/enum.Phase.html\" title=\"enum hotstuff_rs::hotstuff::types::Phase\">Phase</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureBytes.html\" title=\"struct hotstuff_rs::types::data_types::SignatureBytes\">SignatureBytes</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/hotstuff/messages/struct.Proposal.html\" title=\"struct hotstuff_rs::hotstuff::messages::Proposal\">Proposal</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/block/struct.Block.html\" title=\"struct hotstuff_rs::types::block::Block\">Block</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.CryptoHash.html\" title=\"struct hotstuff_rs::types::data_types::CryptoHash\">CryptoHash</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"hotstuff_rs/hotstuff/types/enum.Phase.html\" title=\"enum hotstuff_rs::hotstuff::types::Phase\">Phase</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureSet.html\" title=\"struct hotstuff_rs::types::data_types::SignatureSet\">SignatureSet</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/pacemaker/messages/struct.AdvanceView.html\" title=\"struct hotstuff_rs::pacemaker::messages::AdvanceView\">AdvanceView</a><div class=\"where\">where\n    <a class=\"enum\" href=\"hotstuff_rs/pacemaker/messages/enum.ProgressCertificate.html\" title=\"enum hotstuff_rs::pacemaker::messages::ProgressCertificate\">ProgressCertificate</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/pacemaker/messages/struct.TimeoutVote.html\" title=\"struct hotstuff_rs::pacemaker::messages::TimeoutVote\">TimeoutVote</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureBytes.html\" title=\"struct hotstuff_rs::types::data_types::SignatureBytes\">SignatureBytes</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"hotstuff_rs/pacemaker/types/struct.TimeoutCertificate.html\" title=\"struct hotstuff_rs::pacemaker::types::TimeoutCertificate\">TimeoutCertificate</a>&gt;: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/pacemaker/types/struct.TimeoutCertificate.html\" title=\"struct hotstuff_rs::pacemaker::types::TimeoutCertificate\">TimeoutCertificate</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureSet.html\" title=\"struct hotstuff_rs::types::data_types::SignatureSet\">SignatureSet</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/block/struct.Block.html\" title=\"struct hotstuff_rs::types::block::Block\">Block</a><div class=\"where\">where\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.BlockHeight.html\" title=\"struct hotstuff_rs::types::data_types::BlockHeight\">BlockHeight</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.CryptoHash.html\" title=\"struct hotstuff_rs::types::data_types::CryptoHash\">CryptoHash</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/hotstuff/types/struct.PhaseCertificate.html\" title=\"struct hotstuff_rs::hotstuff::types::PhaseCertificate\">PhaseCertificate</a>: BorshDeserialize,\n    <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.Data.html\" title=\"struct hotstuff_rs::types::data_types::Data\">Data</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.BlockHeight.html\" title=\"struct hotstuff_rs::types::data_types::BlockHeight\">BlockHeight</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.BufferSize.html\" title=\"struct hotstuff_rs::types::data_types::BufferSize\">BufferSize</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChainID.html\" title=\"struct hotstuff_rs::types::data_types::ChainID\">ChainID</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ChildrenList.html\" title=\"struct hotstuff_rs::types::data_types::ChildrenList\">ChildrenList</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.CryptoHash.html\" title=\"struct hotstuff_rs::types::data_types::CryptoHash\">CryptoHash</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.Data.html\" title=\"struct hotstuff_rs::types::data_types::Data\">Data</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.DataLen.html\" title=\"struct hotstuff_rs::types::data_types::DataLen\">DataLen</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.Datum.html\" title=\"struct hotstuff_rs::types::data_types::Datum\">Datum</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.EpochLength.html\" title=\"struct hotstuff_rs::types::data_types::EpochLength\">EpochLength</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.Power.html\" title=\"struct hotstuff_rs::types::data_types::Power\">Power</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureBytes.html\" title=\"struct hotstuff_rs::types::data_types::SignatureBytes\">SignatureBytes</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.SignatureSet.html\" title=\"struct hotstuff_rs::types::data_types::SignatureSet\">SignatureSet</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.TotalPower.html\" title=\"struct hotstuff_rs::types::data_types::TotalPower\">TotalPower</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.ViewNumber.html\" title=\"struct hotstuff_rs::types::data_types::ViewNumber\">ViewNumber</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/validator_set/struct.ValidatorSetBytes.html\" title=\"struct hotstuff_rs::types::validator_set::ValidatorSetBytes\">ValidatorSetBytes</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"hotstuff_rs/types/update_sets/type.VerifyingKeyBytes.html\" title=\"type hotstuff_rs::types::update_sets::VerifyingKeyBytes\">VerifyingKeyBytes</a>&gt;: BorshDeserialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"type\" href=\"hotstuff_rs/types/update_sets/type.VerifyingKeyBytes.html\" title=\"type hotstuff_rs::types::update_sets::VerifyingKeyBytes\">VerifyingKeyBytes</a>, <a class=\"struct\" href=\"hotstuff_rs/types/data_types/struct.Power.html\" title=\"struct hotstuff_rs::types::data_types::Power\">Power</a>&gt;: BorshDeserialize,</div>"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; BorshDeserialize for <a class=\"struct\" href=\"hotstuff_rs/types/update_sets/struct.UpdateSet.html\" title=\"struct hotstuff_rs::types::update_sets::UpdateSet\">UpdateSet</a>&lt;K, V&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;K, V&gt;: BorshDeserialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;K&gt;: BorshDeserialize,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[20722]}