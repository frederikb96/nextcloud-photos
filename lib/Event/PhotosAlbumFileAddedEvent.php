<?php

namespace OCA\Photos\Event;

use OCP\EventDispatcher\Event;

/**
 * Event dispatched when a photo is added to an album.
 */
class PhotosAlbumFileAddedEvent extends Event {
    /** @var int */
    private $albumId;

    /** @var int */
    private $fileId;

    /** @var string */
    private $owner;

    /**
     * @param int $albumId The ID of the album to which the photo is added
     * @param int $fileId The ID of the file being added
     * @param string $owner The user who owns the photo
     */
    public function __construct(int $albumId, int $fileId, string $owner) {
        parent::__construct();
        $this->albumId = $albumId;
        $this->fileId = $fileId;
        $this->owner = $owner;
    }

    /**
     * Get the album ID.
     *
     * @return int
     */
    public function getAlbumId(): int {
        return $this->albumId;
    }

    /**
     * Get the file ID.
     *
     * @return int
     */
    public function getFileId(): int {
        return $this->fileId;
    }

    /**
     * Get the owner username.
     *
     * @return string
     */
    public function getOwner(): string {
        return $this->owner;
    }
}
