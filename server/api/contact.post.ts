export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig();
    const body = await readBody(event);

    if (body.website) {
        throw createError({
            statusCode: 400,
            message: 'Bad Request',
        });
    }

    try {
        const response = await $fetch(config.pipedreamUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.pipedreamToken}`
            },
            body: JSON.stringify({
                fromSite: config.public.siteUrl,
                name: body.name,
                email: body.email,
                message: body.message,
            }),
        });

        return {
            success: true,
            message: 'Message sent successfully!',
        };
    } catch (error) {
        console.error('Error sending message:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to send message. Please try again later.',
        });
    }

})