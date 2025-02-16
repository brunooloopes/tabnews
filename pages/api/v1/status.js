function status(request, response) {
    response.status(200).json({ helth: true });
}

export default status;