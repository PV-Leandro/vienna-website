export function scrollTo(id: string) {
    console.log('scrolling to', id);
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: 'smooth'});
}