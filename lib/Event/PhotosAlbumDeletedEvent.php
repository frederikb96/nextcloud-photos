<?php

namespace OCA\Photos\Event;

use OCP\EventDispatcher\Event;
use OCA\Photos\Album\AlbumFile;

/**
 * Event dispatched when a photo is deleted to an album.
 */
class PhotosAlbumDeletedEvent extends Event {
    /** @var int */
    private $albumId;

    /** @var AlbumFile[] */
    private $albumFiles;

    /** @var array */
    private $collaborators;

    /**
     * @param int $albumId The ID of the album to which the photo is added
     * @param int $fileId The ID of the file being added
     */
    public function __construct(int $albumId, array $albumFiles, array $collaborators) {
        parent::__construct();
        $this->albumId = $albumId;
        $this->albumFiles = $albumFiles;
        $this->collaborators = $collaborators;
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
     * Get the album files.
     *
     * @return AlbumFile[]
     */
    public function getAlbumFiles(): array {
        return $this->albumFiles;
    }

    /**
     * Get the collaborators.
     *
     * @return array
     */
    public function getCollaborators(): array {
        return $this->collaborators;
    }
}
