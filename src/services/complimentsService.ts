interface InterfaceComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}


class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: InterfaceComplimentRequest) {

    }
}

export { CreateComplimentService }