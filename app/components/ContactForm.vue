<template>
    <UPageCard class="w-full max-w-lg mx-auto">
        <UForm :schema="schema" :state="state" class=" mx-auto w-96" @submit="onSubmit">
            <UFormField label="Name" name="name" size="xl">
                <UInput v-model="state.name" placeholder="Your name" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email" size="xl">
                <UInput v-model="state.email" type="email" placeholder="Your email" class="w-full" />
            </UFormField>

            <UFormField label="Message" name="message" size="xl">
                <UTextarea v-model="state.message" placeholder="Your message" class="w-full" :rows="6" />
            </UFormField>

            
            <input type="hidden" v-model="state.website" />

            <UButton
                type="submit"
                color="neutral"
                class="mt-4" 
                size="lg"
                trailing-icon="i-lucide-send">
                    Send
            </UButton>
        </UForm>
    </UPageCard>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const loading = ref(false)

const schema = z.object({
    email: z.email('Invalid email'),
    name: z.string('Name is required'),
    message: z.string('Message is required'),
    website: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    name: undefined,
    message: undefined,
    website: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true
    const rsp = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event.data)
    })

    if (!rsp.ok) {
        toast.add({ title: 'Error', description: 'Failed to send message.', color: 'error' })
        loading.value = false
        return
    }

    toast.add({ title: 'Success', description: 'Message sent.', color: 'neutral' })
    loading.value = false
    state.name = undefined
    state.email = undefined
    state.message = undefined
    state.website = undefined
}
</script>