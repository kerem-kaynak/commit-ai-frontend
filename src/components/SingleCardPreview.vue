<template>
    <div class="flex flex-col justify-center items-center transition-all ease-in h-[70%] sm:w-full lg:w-[90%] rounded-2xl border-2 border-slate-700 shadow-lg shadow-violet-900/30 lg:mt-12 mx-auto mt-24 hover:shadow-violet-900/50">
        <div class="h-[30%] w-full flex justify-center items-center p-8">
            <p class="text-2xl">{{ front }}</p>
        </div>
        <div class="h-[70%] w-full flex justify-center items-center border-t-2 border-dashed border-slate-700 p-8">
            <p class="text-xl text-slate-400">{{ back }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardId: String,
        deckId: String,
        front: String,
        back: String
    },
}
</script>