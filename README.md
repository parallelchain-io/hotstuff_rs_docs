# HotStuff-rs Rustdocs (private items documented)

TODO.
3.

## Purpose

Rustdocs for every version of HotStuff-rs that has been published to crates.io is already automatically available in [docs.rs](https://docs.rs/hotstuff_rs/latest/hotstuff_rs/). However, because of limitations in docs.rs, these rustdocs only include documentation for [private items](https://users.rust-lang.org/t/could-docs-rs-have-a-private-switch/67137/8).

This is undesirable, since HotStuff-rs documents a lot of essential concepts in the module-level docs of private modules--as well as on top of private items--for the sake of locality with the most relevant code. For example, even though "quorums" are an essential concept in HotStuff-rs, they are only fully described in the itemdocs for [`Certificate::quorum`](TODO), which does not appear in docs.rs for HotStuff-rs v0.4 because `Certificate` is a `pub(crate)` trait.

This repository provides a convenient way to read the documentation for these private items and modules by generating rustdocs using the `--document-private-items` option, and publishing them on a public GitHub Pages website.

## Updating this repository

TODO.