
FROM base as build
RUN echo -e '#!/bin/sh\n\
echo Hello world from $(whoami)! In order to get your application running in a container, take a look at the comments in the Dockerfile to get started.'\
> /bin/hello.sh
RUN chmod +x /bin/hello.sh

# purposes the "base" image is used here.
FROM base AS final

# Create a non-privileged user that the app will run under.
# See https://docs.docker.com/go/dockerfile-user-best-practices/
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser
USER appuser

# Copy the executable from the "build" stage.
COPY --from=build /bin/hello.sh /bin/

# What the container should run when it is started.
ENTRYPOINT [ "/bin/hello.sh" ]
