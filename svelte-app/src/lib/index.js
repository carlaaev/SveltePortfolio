// place files you want to import through the `$lib` alias in this folder.
export { default as Header } from "./components/Header.svelte";
export { default as Navigation } from "./components/Navigation.svelte";
export { default as Footer } from "./components/Footer.svelte";
export { default as Card } from "./components/Card.svelte";

import Header from "$lib/components/Header.svelte";
import Navigation from "$lib/components/Navigation.svelte";
import Footer from "$lib/components/Footer.svelte";
import Card from "$lib/components/Card.svelte";